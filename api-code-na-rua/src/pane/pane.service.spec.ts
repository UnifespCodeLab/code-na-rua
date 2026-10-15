import { Test, TestingModule } from '@nestjs/testing';
import { PaneService } from './pane.service';

describe('PaneService', () => {
  let service: PaneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaneService],
    }).compile();

    service = module.get<PaneService>(PaneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
