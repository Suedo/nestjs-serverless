import { Test, TestingModule } from '@nestjs/testing';
import { DbserviceService } from './dbservice.service';

describe('DbserviceService', () => {
  let service: DbserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbserviceService],
    }).compile();

    service = module.get<DbserviceService>(DbserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
