import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { CreateTasklistDto } from './dtos/createTasklist.dto';
import { TasklistService } from './tasklist.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { IsUserExistsPipe } from 'src/users/pipes/isUserExists.pipe';
import { User } from '@prisma/client';

@Controller('tasklist')
export class TasklistController {
    constructor(private tasklistService: TasklistService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post('')
    @UseGuards(AuthGuard)
    async createTasklist(
        @Body() taskListData: CreateTasklistDto, 
        @Body("user_id", IsUserExistsPipe) user: User
    ) {
        let tasklist = await this.tasklistService.createTaskList(taskListData);

        return {
            message: "tasklist created successfully",
            data: {
                ...tasklist
            }
        }
    }
}
