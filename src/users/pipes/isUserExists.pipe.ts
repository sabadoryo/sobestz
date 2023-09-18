import { PipeTransform, Injectable, ArgumentMetadata, Scope, Inject } from '@nestjs/common';
import { UsersService } from '../users.service';
import { UserDoesNotExistException } from '../exceptions/userDoesNotExist.exception';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express'
import { UserOwnershipException } from 'src/common/exceptions/UserOwnership.exception';


@Injectable({ scope: Scope.REQUEST })
export class IsUserExistsPipe implements PipeTransform {
    constructor(
        private userService: UsersService,
        @Inject(REQUEST) protected readonly request: Request
        ) {}

    async transform(value: string, metadata: ArgumentMetadata) {
        const user = await this.userService.findOneById(value);

        if (!user) {
            throw new UserDoesNotExistException();
        }

        return user;
    }
}