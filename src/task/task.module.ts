import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TasklistModule } from 'src/tasklist/tasklist.module';
import { PrismaService } from 'src/app/prisma.src';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    TasklistModule
  ],
  providers: [TaskService, PrismaService],
  controllers: [TaskController]
})
export class TaskModule {}
