import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { TasklistService } from '../tasklist.service';
import { TasklistDoesNotExist } from '../exceptions/TasklistDoesNotExist.exception';

@Injectable()
export class IsTasklistExistsPipe implements PipeTransform {
    constructor(private tasklistService: TasklistService) { }

    async transform(value: string, metadata: ArgumentMetadata) {
        const tasklist = await this.tasklistService.findOneById(value);

        if (!tasklist) {
            throw new TasklistDoesNotExist();
        }

        return tasklist;
    }
}