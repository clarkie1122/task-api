import { IsNotEmpty, IsIn } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { UserEntity } from '@inteck/global-components';

@InputType()
export class GetTaskPayloadDto {
  @Field(type => Number)
  @IsNotEmpty()
  id: number;

  @Field(type => UserEntity)
  @IsNotEmpty()
  user: UserEntity;
}