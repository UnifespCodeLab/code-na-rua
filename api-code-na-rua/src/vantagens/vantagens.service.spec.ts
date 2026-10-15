import { Test, TestingModule } from '@nestjs/testing';
import { VantagensService } from './vantagens.service';

describe('VantagensService', () => {
  let service: VantagensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VantagensService],
    }).compile();

    service = module.get<VantagensService>(VantagensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
