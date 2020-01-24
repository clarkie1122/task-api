import { IsNotEmpty, IsIn } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { UserEntity, CreateTaskDto } from '@inteck/global-components';

@InputType()
export class CreateTaskPayloadDto {
  @Field(type => String)
  @IsNotEmpty()
  user: UserEntity;

  @Field(type => CreateTaskDto)
  @IsNotEmpty()
  taskDto: CreateTaskDto;
}