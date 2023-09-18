import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/app/prisma.src';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async findOneByEmail(email: string) : Promise<User | null> {
        return this.prisma.user.findFirst({
            where: {
                email
            }
        })
    }

    async findOneById(id: string) : Promise<User | null> {
        return this.prisma.user.findFirst({
            where: {
                id
            }
        })
    }

    async create(email: string, password: string): Promise<User | null> {
        return this.prisma.user.create({
            data: {
                email,
                password
            }
        })
    }
}
