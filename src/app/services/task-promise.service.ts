import { Injectable } from '@angular/core';
import { Database, ref, set, push, update, remove, get } from '@angular/fire/database';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskPromiseService {
  private tasksRef: any;

  constructor(private db: Database) {
    this.tasksRef = ref(this.db, 'tasks');
  }

  // Récupérer une fois la liste des tâches
  async getTasks(): Promise<Task[]> {
    const snapshot = await get(this.tasksRef); // Récupération unique des données
    const data = snapshot.val();
    return data ? Object.keys(data).map((id) => ({ id, ...data[id] })) : [];
  }

  // Ajouter une tâche
  async addTask(task: Task): Promise<void> {
    const newTaskRef = push(this.tasksRef);
    await set(newTaskRef, task); // Ajout de la tâche
  }

  // Mettre à jour une tâche
  async updateTask(task: Task): Promise<void> {
    if (!task.id) {
      throw new Error('La tâche doit avoir un ID pour être mise à jour.');
    }
    const taskRef = ref(this.db, `tasks/${task.id}`);
    await update(taskRef, task); // Mise à jour de la tâche
  }

  // Supprimer une tâche
  async deleteTask(taskId: string): Promise<void> {
    const taskRef = ref(this.db, `tasks/${taskId}`);
    await remove(taskRef); // Suppression de la tâche
  }
}