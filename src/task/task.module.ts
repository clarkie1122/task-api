import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskResolver } from './task.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity]),
  ],
  providers: [TaskResolver, TaskService],
})
export class TaskModule { }
