import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { CacheModule } from '@nestjs/cache-manager';
import { TasklistModule } from 'src/tasklist/tasklist.module';
import { TaskModule } from 'src/task/task.module';


@Module({
  imports: [
    AuthModule, 
    UsersModule, 
    CacheModule.register({isGlobal: true}),
    TasklistModule,
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
