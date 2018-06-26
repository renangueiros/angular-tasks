import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { TasksService } from '../core/services/tasks.service';
import { ITask } from '../core/models/i-task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Observable<ITask[]>;

  constructor(
    private tasksService: TasksService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tasks = this.tasksService.tasks;
  }

  navToCreateTask(): void {
    this.router.navigate(['/tasks/create']);
  }

  navToDetailsTask(task: ITask): void {
    this.tasksService.currentTask = task;
    this.router.navigate(['tasks/details']);
  }

}
