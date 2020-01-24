import { IsNotEmpty, IsIn } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { UserEntity, UpdateTaskDto } from '@inteck/global-components';

@InputType()
export class UpdateTaskPayloadDto {
  @Field(type => String)
  @IsNotEmpty()
  user: UserEntity;

  @Field(type => UpdateTaskDto)
  @IsNotEmpty()
  taskDto: UpdateTaskDto;
}