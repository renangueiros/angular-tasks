import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TasksService } from '../core/services/tasks.service';
import { ITask } from '../core/models/i-task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: ITask;

  constructor(
    public taskService: TasksService,
    public router: Router
  ) { }

  ngOnInit() {
    const currentTask = this.taskService.currentTask || null;
    if (currentTask) {
      this.task = this.taskService.currentTask;
    } else {
      this.navToTasks();
    }
  }

  updateTask(): void {
    this.taskService.updateTask(this.task).then(() => { this.navToTasks(); });
  }

  back(): void {
    this.navToTasks();
  }

  navToTasks(): void {
    this.router.navigate(['/tasks']);
  }

}
