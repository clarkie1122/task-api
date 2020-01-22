import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { UseGuards, Req, ValidationPipe } from "@nestjs/common";
import { TaskDto } from "./task.graphql.schema";
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
// import { GqlAuthGuard } from '../auth/gql-auth-guard';
// import { GetUser } from "../auth/get-user.decorator";
// import { User } from "../auth/user.entity";
import { MessagePattern } from '@nestjs/microservices';

@Resolver(of => TaskDto)
export class TaskResolver {
    constructor(
        private readonly taskService: TaskService
    ) { }

    // @Query(() => [TaskDto])
    @MessagePattern({ type: 'get-tasks' })
    async tasks() {
        console.log('Tasks API Hit - tasks');
        return await this.taskService.findAll();
    }

    // @Query(() => TaskDto)
    // async task(
    //     @Args({ name: 'id', type: () => Number }) id: number,
    //     @GetUser() user: User
    // ) {
    //     return await this.taskService.findOne(id, user);
    // }

    // @Mutation(() => TaskDto)
    // async createTask(
    //     @Args('createTask', ValidationPipe) task: CreateTaskDto,
    //     @GetUser() user: User
    // ) {
    //     return await this.taskService.createOne(task, user)
    // }

    // @Mutation(() => TaskDto)
    // async removeTask(
    //     @Args({ name: 'id', type: () => Number }) id: number,
    //     @GetUser() user: User
    // ) {
    //     return await this.taskService.removeOne(id, user);
    // }

    // @Mutation(() => TaskDto)
    // async updateTask(
    //     @Args('updateTask', ValidationPipe) task: UpdateTaskDto,
    //     @GetUser() user: User
    // ) {
    //     return await this.taskService.updateOne(task, user)
    // }
}