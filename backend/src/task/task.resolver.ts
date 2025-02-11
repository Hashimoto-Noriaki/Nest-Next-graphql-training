import { Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

@Resolver()
export class TaskResolver {
  //Nest.jsが自動的にタスクサービスのインスタンスを作成し、このコンストラクターに渡してくれてタスクリゾルバーの中でタスクサービスが利用できる
  constructor(private readonly taskService: TaskService) {}
  //タスク一覧を取得し、サービスのgetTasksメソッドの結果を返却する
  @Query(() => [Task], { nullable: 'items' }) //{ nullable: 'items' })は配列 [Task]の中の各要素がnullになる可能性があることを許可。空の配列を返却
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }
}
