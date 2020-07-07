import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreateBlogDto } from './dto/CreateBlog';
import { BlogModel } from './model/BlogModel';
import { GetBlogDto } from './dto/GetBlogDto';

@Controller('blogs')
export class BlogPostController {
  constructor(private blogService: BlogPostService) {}

  @Get(':id')
  public async getBlogById(@Param('id') id: string): Promise<BlogModel> {
    const op = await this.blogService.getBlogById(id);
    return op;
  }

  @Get('all')
  public async getAllBlogs() {
    const op = await this.blogService.getAllBlogs();
    return op;
  }

  @Post()
  @UsePipes(ValidationPipe)
  public async createBlogPost(@Body() dto: CreateBlogDto): Promise<BlogModel> {
    const op = await this.blogService.createBlog(dto);
    return op;
  }
}

// reason why webpack build doesnt work
// https://github.com/nestjs/nest/issues/1386
