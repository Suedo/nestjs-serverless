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
  async createBlog(dto: CreateBlogDto): Promise<BlogModel> {
    const { title, post } = dto;
    let op = {} as BlogModel;

    const newPost = Object.assign(new BlogModel(), {
      title,
      post,
    });

    mapper.put(newPost).then(objectSaved => {
      op = objectSaved;
      console.log('saved object:', objectSaved);
    });

    return op;
  }
}
