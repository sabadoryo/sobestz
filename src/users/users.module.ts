import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/app/prisma.src';

@Module({
  imports: [],
  providers: [UsersService, PrismaService],
  exports: [UsersService]
})
export class UsersModule {}
