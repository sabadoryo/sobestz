import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { TaskService } from '../task.service';
export declare class IsTaskExists implements PipeTransform {
    private taskService;
    constructor(taskService: TaskService);
    transform(value: string, metadata: ArgumentMetadata): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.Status;
        tasklist_id: string;
        user_id: string;
    }>;
}
