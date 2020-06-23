import { Module } from '@nestjs/common';
import { DbserviceService } from './dbservice/dbservice.service';

@Module({
  providers: [DbserviceService]
})
export class CoreModule {}
