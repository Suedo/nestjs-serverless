This project uses NestJS with Serverless Framework.

Key points:

1.  **NOT** using webpack for bundling. Earlier used it, and had a lot of friction with Nest bundling. More info [here](https://github.com/nestjs/nest/issues/1386).
2.  Will be switching to regular DynamoDB queries from current [dynamodb-data-mapper-js](https://github.com/awslabs/dynamodb-data-mapper-js), as it tends to be (imo) more obtuse and boilerplate-ish as queries grow more complex, needing various [addons](dynamodb-data-mapper-js) like annotations, expressions etc to work.
