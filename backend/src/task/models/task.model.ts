import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: string;

  @Field()
  status: 'NOT_STARTED' | 'PROGRESS' | 'COMPLETED';

  @Field({ nullable: true })
  description: string;
}
