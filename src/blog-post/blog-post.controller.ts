import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreateBlogDto } from './dto/CreateBlog';
import { BlogModel } from './model/BlogModel';
import { GetBlogDto } from './dto/GetBlogDto';

@Controller('blogs')
export class BlogPostController {
  constructor(private blogService: BlogPostService) {}

  @Get()
  @UsePipes(ValidationPipe)
  public async getBlogs(@Body() dto: GetBlogDto): Promise<BlogModel> {
    const op = await this.blogService.getBlog(dto);
    return op;
  }

  @Post()
  @UsePipes(ValidationPipe)
  public async createBlogPost(@Body() dto: CreateBlogDto): Promise<BlogModel> {
    const op = await this.blogService.createBlog(dto);
    return op;
  }
}
