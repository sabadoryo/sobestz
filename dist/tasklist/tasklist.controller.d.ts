import { CreateTasklistDto } from './dtos/createTasklist.dto';
import { TasklistService } from './tasklist.service';
import { User } from '@prisma/client';
export declare class TasklistController {
    private tasklistService;
    constructor(tasklistService: TasklistService);
    createTasklist(taskListData: CreateTasklistDto, user: User): Promise<{
        message: string;
        data: {
            id: string;
            name: string;
            user_id: string;
        };
    }>;
}
