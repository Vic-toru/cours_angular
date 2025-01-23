import { Component, effect, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgStyle } from '@angular/common';


interface Task {
  title: string;
  priority: 'haute' | 'moyenne' | 'basse';
  complete: boolean;
}

@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule, NgFor, NgStyle , NgIf],
  templateUrl: './tasklist-signal.component.html',
  styleUrl: './tasklist-signal.component.css',
})
export class TasklistSignalComponent {
  private taskList = signal<Task[]>([]);

  tasks = computed(() => this.taskList());

  newTaskTitle: string = '';
  newTaskPriority: 'haute' | 'moyenne' | 'basse' = 'moyenne';

  priorityOrder: {
    haute: number;
    moyenne: number;
    basse: number;
  } = {
    haute: 0,
    moyenne: 1,
    basse: 2,
  }


  // Ajouter la tâche
  addTask() {
    if (this.newTaskTitle) {
      const newTask: Task = {
        title: this.newTaskTitle,
        priority: this.newTaskPriority,
        complete: false,
      };
      const updatedTasks = [...this.taskList(), newTask];
      this.taskList.set(updatedTasks);
      this.newTaskTitle = '';
      this.newTaskPriority = 'moyenne';
    }
  }

  //Supprimer la tâche
  delTask(task: Task) {
    this.taskList.set(this.taskList().filter((t) => t !== task));
  }

  // Màj terminée ou pas
  toggleComplete(task: Task) {
    this.taskList.update((tasks) =>
      tasks.map((t) =>
        t === task ? { ...t, complete: !t.complete } : t
      )
    );
  }

  // Tâches triées par priorité (besoin de l'IA pour m'expliquer sort() et comment l'utiliser avec les priorités en string)
  sortedTasks(){
    return [...this.taskList()].sort((a,b) => 
      this.priorityOrder[a.priority] - this.priorityOrder[b.priority]
    );
  }

  // Compteur de tâches complétées
  completedCount = computed(() =>
    this.taskList().filter((t) => t.complete).length
  );


  // Compteur de tâches non complétées
  remainingCount = computed(() =>
    this.taskList().filter((t) => !t.complete).length
  );

  // Vérifier si toutes les tâches sont complétées (Besoin de l'IA pour every() et comment l'utiliser avec les tâches)
  allTasksCompleted = computed(() =>
    this.taskList().length > 0 &&
    this.taskList().every((t) => t.complete)
  );

}
