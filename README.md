This project tries to use NestJS with Serverless Framework. Bundled through webpack. Faces bundling issue as mentioned [here](https://github.com/nestjs/nest/issues/1386).

This problem is not faced in local deployments, but ONLY when deployed to lambda.

In Lambda even, It works and gives proper response json when **not** using validation classes and pipes.

I made this project as a POC, trying to implement configuration features from various other Nest+Serverles projects in Github. Untill the build issue gets an elegant fix, will skip Nest + Serverless.
