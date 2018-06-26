import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TasksService } from '../core/services/tasks.service';
import { Task } from '../core/models/task.model';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {

  task: Task = { title: '' };

  constructor(
    private tasksService: TasksService,
    private router: Router
  ) { }

  saveTask(): void {
    this.tasksService.createTask(this.task.title).then(() => { this.navToTasks(); });
  }

  cancel(): void {
    this.navToTasks();
  }

  navToTasks(): void {
    this.router.navigate(['/tasks']);
  }

}
