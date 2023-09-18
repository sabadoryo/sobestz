import { Module } from '@nestjs/common';
import { TasklistService } from './tasklist.service';
import { TasklistController } from './tasklist.controller';
import { PrismaService } from 'src/app/prisma.src';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [TasklistService, PrismaService],
  controllers: [TasklistController],
  exports: [TasklistService]
})
export class TasklistModule {}
