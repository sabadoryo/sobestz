import { PipeTransform, Injectable, ArgumentMetadata, Scope, Inject } from '@nestjs/common';
import { TaskService } from '../task.service';
import { TaskDoesNotExistException } from '../exceptions/taskDoesNotExist.exception';
import { isMongoId } from 'class-validator';
import { InvalidIdTypeException } from 'src/common/exceptions/InvalidIdType.exception';


@Injectable()
export class IsTaskExists implements PipeTransform {
    constructor(private taskService: TaskService) {}

    async transform(value: string, metadata: ArgumentMetadata) {
        if (!isMongoId(value)) {
            throw new InvalidIdTypeException();
        }

        const task = await this.taskService.findOneById(value);

        if (!task) {
            throw new TaskDoesNotExistException();
        }

        return task;
    }
}