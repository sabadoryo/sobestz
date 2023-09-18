import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTaskDto } from './dtos/createTask.dto';
import { IsUserExistsPipe } from 'src/users/pipes/isUserExists.pipe';
import { Status, Task, TaskList, User } from '@prisma/client';
import { IsTasklistExistsPipe } from 'src/tasklist/pipes/isTasklistExists.pipe';
import { IsTaskExists } from './pipes/isTaskExists.pipe';
import { IsValidStatusPipe } from './pipes/isValidStatus.pipe';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post('')
    @UseGuards(AuthGuard)
    async createTask(
        @Body() taskData: CreateTaskDto, 
        @Body("user_id", IsUserExistsPipe) user: User,
        @Body("tasklist_id", IsTasklistExistsPipe) tasklist: TaskList
    ) {
        let task = await this.taskService.createTask(taskData);

        return {
            message: "tasklist created successfully",
            data: {
                ...task
            }
        }
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    @UseGuards(AuthGuard)
    async getTask(
        @Param("id", IsTaskExists) task: Task,
    ) {
        return {
            message: "task found successfully",
            data: {
                ...task
            }
        }
    }

    @HttpCode(HttpStatus.OK)
    @Get('')
    @UseGuards(AuthGuard)
    async getAllTasks(@Query("name") name: string) {
        let tasks = await this.taskService.findAll(name);

        return {
            message: "task found successfully",
            data: tasks
        }
    }

    @HttpCode(HttpStatus.ACCEPTED)
    @Patch(':id/change-status')
    @UseGuards(AuthGuard)
    async changeTaskStatus(
        @Param("id", IsTaskExists) task: Task,
        @Body("status", IsValidStatusPipe) status: Status,
    ) {
        let updatedTask = await this.taskService.updateStatus(task.id, status);

        return {
            message: "task status updated successfully",
            data: {
                ...updatedTask
            }
        }
    }

    @HttpCode(HttpStatus.OK)
    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteTask(
        @Param("id", IsTaskExists) task: Task,
    ) {
        await this.taskService.deleteTask(task.id);

        return {
            message: "task deleted successfully",
            data: null
        }
    }
}
