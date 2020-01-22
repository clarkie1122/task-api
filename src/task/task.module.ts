import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskResolver } from './task.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([{ name: 'TASK_SERVICE', transport: Transport.REDIS, options: { url: 'redis://127.0.0.1:6379' }}]),
    TypeOrmModule.forFeature([TaskEntity]),
  ],
  providers: [TaskResolver, TaskService],
})
export class TaskModule { }
