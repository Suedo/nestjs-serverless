import {
  attribute,
  hashKey,
  rangeKey,
  table,
} from '@aws/dynamodb-data-mapper-annotations';
import { uuid } from 'uuidv4';

@table('BlogTable')
export class BlogModel {
  @hashKey({ defaultProvider: () => uuid() })
  id: string;

  @rangeKey({ defaultProvider: () => new Date() })
  createdAt: Date;

  @attribute()
  title: string;

  @attribute()
  post: string;
}
