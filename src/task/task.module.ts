import { Module } from '@nestjs/common';
import { TaskEntity } from '@inteck/global-components';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity]),
  ],
  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule { }
