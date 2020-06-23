import { Module } from '@nestjs/common';
import { BlogPostController } from './blog-post.controller';
import { BlogPostService } from './blog-post.service';
import { BlogRepository } from './blog.repository';

@Module({
  controllers: [BlogPostController],
  providers: [BlogPostService, BlogRepository],
})
export class BlogPostModule {}
