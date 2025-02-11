import { Query, Resolver } from '@nestjs/graphql';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Resolver()
export class TaskResolver {
  //Nest.jsが自動的にタスクサービスのインスタンスを作成し、このコンストラクターに渡してくれてタスクリゾルバーの中でタスクサービスが利用できる
  constructor(private readonly taskService: TaskService) {}
  //タスク一覧を取得し、サービスのgetTasksメソッドの結果を返却する
  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }
}
