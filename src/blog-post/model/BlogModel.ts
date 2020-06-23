import { attribute, hashKey, rangeKey, table } from '@aws/dynamodb-data-mapper-annotations';
import { uuid } from 'uuidv4';

@table(process.env.BLOG_TABLE_NAME)
export class BlogModel {
  @hashKey({ defaultProvider: () => uuid() })
  id: string;

  @rangeKey({ defaultProvider: () => new Date().toISOString() })
  createdAt: string;

  @attribute()
  title: string;

  @attribute()
  post: string;
}
