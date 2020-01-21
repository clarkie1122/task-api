import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { TaskStatus } from "./task-status.enum";

@Entity()
export class TaskEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;

    // Need to find a way to link this to the user api
    // @ManyToOne(type => User, user => user.tasks)
    // user: User;
}