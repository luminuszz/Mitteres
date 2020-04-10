import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import Posts from './post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/find')
  public async index(): Promise<Posts[]> {
    return await this.postsService.findAll();
  }
  @Get('/find/:id')
  public async findForUser(@Param('id') userId: number): Promise<Posts[]> {
    console.log(userId)
    return await this.postsService.findByUser(userId);
  }
  @Post('/create')
  public async store(@Body() data): Promise<Posts> {
    return await this.postsService.store(data);
  }
}
