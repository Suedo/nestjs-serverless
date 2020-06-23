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

@Controller('blogs')
export class BlogPostController {
  constructor(private blogService: BlogPostService) {}

  @Get()
  getBlogs() {
    return 'Hello from Blogs!';
  }

  @Post()
  @UsePipes(ValidationPipe)
  public async createBlogPost(@Body() dto: CreateBlogDto): Promise<BlogModel> {
    const op = await this.blogService.createBlog(dto);
    return op;
  }
}
