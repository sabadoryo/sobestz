import { PipeTransform, Injectable, ArgumentMetadata, Scope, Inject } from '@nestjs/common';
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