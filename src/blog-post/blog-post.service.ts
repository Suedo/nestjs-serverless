import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/CreateBlog';
import { BlogRepository } from './blog.repository';
import { BlogModel } from './model/BlogModel';
import { GetBlogDto } from './dto/GetBlogDto';

@Injectable()
export class BlogPostService {
  constructor(private db: BlogRepository) {}

  public async getBlog(dto: GetBlogDto): Promise<BlogModel> {
    const blog = await this.db.getBlog(dto);
    return blog;
  }

  public async createBlog(dto: CreateBlogDto): Promise<BlogModel> {
    const blog = await this.db.createBlog(dto);
    return blog;
  }
}
