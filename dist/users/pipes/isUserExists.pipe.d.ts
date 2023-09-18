import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { UsersService } from '../users.service';
import { Request } from 'express';
export declare class IsUserExistsPipe implements PipeTransform {
    private userService;
    protected readonly request: Request;
    constructor(userService: UsersService, request: Request);
    transform(value: string, metadata: ArgumentMetadata): Promise<{
        id: string;
        email: string;
        password: string;
    }>;
}
