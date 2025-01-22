import { Component } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskPromiseService } from '../../services/task-promise.service';

@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css',
})
export class TaskListComponent {
  tasks: Task[] = []; // Liste des tâches
  newTask: Task = { title: '', status: 'pending' }; // Nouvelle tâche

  constructor(private db: Database, private taskService: TaskPromiseService) {
    const tasksRef = ref(this.db, 'tasks');

    // Récupération en temps réel des tâches
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      this.tasks = data
        ? Object.keys(data).map((id) => ({ id, ...data[id] }))
        : [];
    });
  }

  async addTask() {
    if (this.newTask.title.trim()) {
      try {
        await this.taskService.addTask(this.newTask); 
        this.newTask = { title: '', status: 'pending' }; 
      } catch (error) {
        console.error('Erreur lors de l\'ajout de la tâche :', error);
      }
    } else {
      console.warn('Le titre de la tâche est vide.');
    }
  }

  async delTask(taskId: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      try {
        await this.taskService.deleteTask(taskId); // Supprimer la tâche de la BDD
        this.tasks = this.tasks.filter((task) => task.id !== taskId); // Mise à jour locale
      } catch (error) {
        console.error('Erreur lors de la suppression de la tâche :', error);
      }
    }
  }


  async updateStatus(task: Task) {
    if (!task.id) {
      console.warn('Impossible de mettre à jour une tâche sans ID.');
      return;
    }
  
    // Basculer le statut entre 'pending' et 'completed'
    const updatedStatus = task.status === 'pending' ? 'completed' : 'pending';
  
    try {
      // Mettre à jour la tâche dans la base de données Firebase
      await this.taskService.updateTask({ ...task, status: updatedStatus });
  
      // Mettre à jour la liste localement
      this.tasks = this.tasks.map((t) =>
        t.id === task.id ? { ...t, status: updatedStatus } : t
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut de la tâche :', error);
    }
  }
}
