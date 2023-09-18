import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma.src';
import { CreateTasklistDto } from './dtos/createTasklist.dto';

@Injectable()
export class TasklistService {
    constructor(private prisma: PrismaService) {}

    async createTaskList(data: CreateTasklistDto) {
        return this.prisma.taskList.create({
            data
        })
    }

    async findOneById(id: string) {
        return this.prisma.taskList.findFirst({
            where: {
                id
            }
        })
    }
}
