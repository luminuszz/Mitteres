import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Post from './post.entity'

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}
  public async findAll(): Promise<Post[]> {
    return await this.postsRepository.find();

  }

  public async findByUser(id:string):Promise<Post>{
    return await this.postsRepository.findOne(id)
  }

  public async store(data:Post):Promise<Post>{
    return await this.postsRepository.save(data)
  }
}
