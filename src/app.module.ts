import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import {PostsService} from './posts/posts.service';
import { UsersController } from './users/users.controller';
import {UsersModule} from './users/users.module'
import {UsersService} from './users/users.service'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    PostsModule,
  ],

  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, UsersService, PostsService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
