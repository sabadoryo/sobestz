import { User } from '@prisma/client';
import { PrismaService } from 'src/app/prisma.src';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findOneByEmail(email: string): Promise<User | null>;
    findOneById(id: string): Promise<User | null>;
    create(email: string, password: string): Promise<User | null>;
}
