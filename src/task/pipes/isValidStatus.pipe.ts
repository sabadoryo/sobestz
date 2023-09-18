import { PipeTransform, Injectable, ArgumentMetadata, Scope, Inject } from '@nestjs/common';
import { TaskService } from '../task.service';
import { TaskDoesNotExistException } from '../exceptions/taskDoesNotExist.exception';
import { isMongoId } from 'class-validator';
import { InvalidIdTypeException } from 'src/common/exceptions/InvalidIdType.exception';
import { Status } from '@prisma/client';
import { InvalidStatusException } from '../exceptions/InvalidStatus.exception';


@Injectable()
export class IsValidStatusPipe implements PipeTransform {
    async transform(value: string, metadata: ArgumentMetadata) {
        if (!Status[value]) {
            throw new InvalidStatusException();
        }

        return value;
    }
}