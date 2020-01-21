import { Field, Int, ObjectType, InputType } from 'type-graphql';
import { TaskStatus } from './task-status.enum';

@ObjectType()
@InputType('tasks')
export class TaskDto {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  title: string;

  @Field(type => String)
  description: string;

  @Field(type => String)
  status: TaskStatus;

  // Need to work on getting the user linking from the user api
  // @Field(type => User)
  // user: User;
}