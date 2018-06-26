import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { CoreModule } from '../core.module';
import { AuthService } from './auth.service';

import { ITask } from '../models/i-task.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: CoreModule
})
export class TasksService {

  tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<ITask[]>;

  constructor(private auth: AuthService, private fireStore: AngularFirestore) {
    auth.uid.pipe(take(1)).subscribe((uid: string) => {
      this.tasksCollection = fireStore.collection<Task>(uid);

      this.tasks = this.tasksCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Task;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    });
  }

  createTask(title: string): Promise<any> {
    const task: Task = { title: title };
    return this.tasksCollection.add(task);
  }

  updateTask(task: ITask): Promise<void> {
    const updateTask: Task = { title: task.title, description: task.description };
    return this.tasksCollection.doc<Task>(task.id).update(updateTask);
  }

  deleteTask(task: ITask): Promise<void> {
    return this.tasksCollection.doc<Task>(task.id).delete();
  }

}
