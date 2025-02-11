import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';

@Injectable()
export class TaskService {
  //タスクモデルの配列を定義
  tasks: Task[] = [];

  //タスク一覧を取得するメソッド
  getTasks(): Task[] {
    const task1 = new Task();
    task1.id = 1;
    task1.name = 'task1';
    task1.dueDate = '2024-02-11';
    task1.status = 'NOT_STARTED';
    this.tasks.push(task1); //task1をタスクフィールドに追加
    return this.tasks; //tasksを返す
  }
}
