import { PrismaService } from 'src/app/prisma.src';
import { CreateTasklistDto } from './dtos/createTasklist.dto';
export declare class TasklistService {
    private prisma;
    constructor(prisma: PrismaService);
    createTaskList(data: CreateTasklistDto): Promise<{
        id: string;
        name: string;
        user_id: string;
    }>;
    findOneById(id: string): Promise<{
        id: string;
        name: string;
        user_id: string;
    }>;
}
