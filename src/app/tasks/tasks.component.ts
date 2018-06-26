import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { TasksService } from '../core/services/tasks.service';
import { AuthService } from '../core/services/auth.service';
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
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tasks = this.tasksService.tasks;
  }

  deleteTask(task: ITask): void {
    this.tasksService.deleteTask(task);
  }

  signout(): void {
    this.auth.signout().then(() => { this.navToSignin(); });
  }

  navToCreateTask(): void {
    this.router.navigate(['/tasks/create']);
  }

  navToDetailsTask(task: ITask): void {
    this.tasksService.currentTask = task;
    this.router.navigate(['tasks/details']);
  }

  navToSignin(): void {
    this.router.navigate(['/signin']);
  }

}
