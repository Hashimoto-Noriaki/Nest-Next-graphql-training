import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
@Injectable() // NestJS のサービス (Service) であることを示すデコレーター
export class TaskService {
  tasks: Task[] = []; //初期状態では空の配列 ([])。

  getTasks(): Task[] {
    //getTasks メソッドは、タスク一覧 (Task[]) を取得するためのメソッド。return this.tasks; で、タスクの配列を返す。
    const task1 = new Task();
    task1.id = 1;
    task1.name = '犬';
    task1.dueDate = '2024-02-11';
    task1.status = 'NOT_STARTED';
    this.tasks.push(task1);
    return this.tasks;
  }
}
