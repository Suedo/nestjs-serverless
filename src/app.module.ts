import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './blog-post/blog-post.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [BlogPostModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
