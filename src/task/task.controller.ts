import { Controller, HttpCode } from "@nestjs/common";
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreateTaskPayloadDto } from "./dto/create-task-payload.dto";
import { GetTaskPayloadDto } from "./dto/get-task-payload.dto";
import { RemoveTaskPayloadDto } from "./dto/remove-task-payload.dto";
import { UpdateTaskPayloadDto } from "./dto/update-task-payload.dto";
import { TaskService } from "./task.service";

@Controller()
export class TaskController {
    constructor(
        private readonly taskService: TaskService
    ) { }

    @MessagePattern({ type: 'get-tasks' })
    async tasks() {
        return await this.taskService.findAll();
    }

    @MessagePattern({ type: 'get-task' })
    async task(@Payload() data: GetTaskPayloadDto) {
        const { id, user } = data;
        return await this.taskService.findOne(id, user);
    }

    @MessagePattern({ type: 'create-task' })
    async createTask(@Payload() data: CreateTaskPayloadDto) {
        const { user, taskDto } = data;
        return await this.taskService.createOne(taskDto, user)
    }

    @MessagePattern({ type: 'remove-task' })
    async removeTask(@Payload() data: RemoveTaskPayloadDto) {
        const { id, user } = data;
        return await this.taskService.removeOne(id, user);
    }

    @MessagePattern({ type: 'update-task' })
    async updateTask(@Payload() data: UpdateTaskPayloadDto) {
        const { user, taskDto } = data;
        return await this.taskService.updateOne(taskDto, user)
    }
}