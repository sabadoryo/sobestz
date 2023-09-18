import { TaskService } from './task.service';
import { CreateTaskDto } from './dtos/createTask.dto';
import { Status, Task, TaskList, User } from '@prisma/client';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    createTask(taskData: CreateTaskDto, user: User, tasklist: TaskList): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            status: import(".prisma/client").$Enums.Status;
            tasklist_id: string;
            user_id: string;
        };
    }>;
    getTask(task: Task): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            status: import(".prisma/client").$Enums.Status;
            tasklist_id: string;
            user_id: string;
        };
    }>;
    getAllTasks(name: string, orderBy: Object): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            status: import(".prisma/client").$Enums.Status;
            tasklist_id: string;
            user_id: string;
        }[];
    }>;
    changeTaskStatus(task: Task, status: Status): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            status: import(".prisma/client").$Enums.Status;
            tasklist_id: string;
            user_id: string;
        };
    }>;
    deleteTask(task: Task): Promise<{
        message: string;
        data: any;
    }>;
}
