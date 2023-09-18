import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { TasklistService } from '../tasklist.service';
export declare class IsTasklistExistsPipe implements PipeTransform {
    private tasklistService;
    constructor(tasklistService: TasklistService);
    transform(value: string, metadata: ArgumentMetadata): Promise<{
        id: string;
        name: string;
        user_id: string;
    }>;
}
