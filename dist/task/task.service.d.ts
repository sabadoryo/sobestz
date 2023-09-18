import { PrismaService } from 'src/app/prisma.src';
import { CreateTaskDto } from './dtos/createTask.dto';
import { Status } from '@prisma/client';
export declare class TaskService {
    private prisma;
    constructor(prisma: PrismaService);
    createTask(data: CreateTaskDto): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.Status;
        tasklist_id: string;
        user_id: string;
    }>;
    findOneById(id: string): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.Status;
        tasklist_id: string;
        user_id: string;
    }>;
    findOneByTasklistId(tasklist_id: string): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.Status;
        tasklist_id: string;
        user_id: string;
    }[]>;
    findAll(name: string): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.Status;
        tasklist_id: string;
        user_id: string;
    }[]>;
    updateStatus(id: string, status: Status): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.Status;
        tasklist_id: string;
        user_id: string;
    }>;
    deleteTask(id: string): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.Status;
        tasklist_id: string;
        user_id: string;
    }>;
}
