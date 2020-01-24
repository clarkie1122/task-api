import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntity, UserEntity, CreateTaskDto, UpdateTaskDto } from "@inteck/global-components";
import { RpcException } from "@nestjs/microservices";

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TaskEntity) private readonly TaskRepository: Repository<TaskEntity>
    ) { }

    async findAll(): Promise<TaskEntity[]> {
        return await this.TaskRepository.find({});
    }

    async findOne(
        id: number,
        user: UserEntity
    ): Promise<TaskEntity> {
        const task = await this.TaskRepository.findOne({
            relations: ['user'],
            where: { id, user: user.id }
        });

        if (!task) {
            throw new RpcException(`Task with Id "${id}" not found.`);
        }

        return task;
    }

    async createOne(
        taskDto: CreateTaskDto,
        user: UserEntity
    ): Promise<TaskEntity> {
        let task = new TaskEntity();

        task.title = taskDto.title;
        task.description = taskDto.description;
        task.status = taskDto.status;
        task.user = user;

        await this.TaskRepository.save(task);

        return task;
    }

    async removeOne(
        id: number,
        user: UserEntity
    ): Promise<void> {
        const task = await this.findOne(id, user);

        await this.TaskRepository.remove(task);
    }

    async updateOne(
        taskDto: UpdateTaskDto,
        user: UserEntity
    ): Promise<TaskEntity> {
        const task = await this.findOne(taskDto.id, user);

        task.title = taskDto.title;
        task.description = taskDto.description;
        task.status = taskDto.status;

        await this.TaskRepository.save(task);

        return task;
    }
}