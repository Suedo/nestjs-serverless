import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/CreateBlog';

import { DataMapper } from '@aws/dynamodb-data-mapper';
import { DynamoDB } from 'aws-sdk';
import { BlogModel } from './model/BlogModel';

const mapper = new DataMapper({
  client: new DynamoDB({ region: 'ap-south-1' }), // the SDK client used to execute operations
  // tableNamePrefix: 'dev_', // optionally, you can provide a table prefix to keep your dev and prod tables separate
});

@Injectable()
export class BlogRepository {
  async getBlogById(id: string): Promise<BlogModel> {
    const condition = Object.assign(new BlogModel(), {
      id,
    });

    const op = mapper.get(condition);
    console.log('saved object:', JSON.stringify(op, null, 2));

    return op;
  }

  async getAllBlogs(): Promise<BlogModel[]> {
    const blogs = [];
    // Error: No item with the key {"id":{"S":"all"}} found in the BlogTable table
    for await (const blog of mapper.scan(BlogModel)) {
      blogs.push(blog);
    }
    return blogs;
  }

  async createBlog(dto: CreateBlogDto): Promise<BlogModel> {
    const { title, post } = dto;

    const newPost = Object.assign(new BlogModel(), {
      title,
      post,
    });

    const op = mapper.put(newPost);
    console.log('saved object:', JSON.stringify(op, null, 2));

    return op;
  }
}
