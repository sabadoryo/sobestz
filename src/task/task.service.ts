import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma.src';
import { CreateTaskDto } from './dtos/createTask.dto';
import { Status } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}

    async createTask(data: CreateTaskDto) {
        return this.prisma.task.create({
            data
        })
    }

    async findOneById(id: string) {
        return this.prisma.task.findFirst({
            where: {
                id
            }
        })
    }

    async findOneByTasklistId(tasklist_id: string) {
        return this.prisma.task.findMany({
            where: {
                tasklist_id
            }
        })
    }

    async findAll(name: string, orderBy: Object) {
        return this.prisma.task.findMany({
            where: {
                name: {
                    contains: name
                }
            },
            orderBy
        });
    }

    async updateStatus(id: string, status: Status) {
        return this.prisma.task.update({
            where: {
                id
            },
            data: {
                status
            }
        })
    }

    async deleteTask(id: string) {
        return this.prisma.task.delete({
            where: {
                id
            }
        })
    }
}
