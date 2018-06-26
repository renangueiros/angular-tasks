import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TasksService } from '../core/services/tasks.service';
import { Task } from '../core/models/task.model';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.css']
})
export class TasksCreateComponent {

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
