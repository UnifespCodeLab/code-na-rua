import { Test, TestingModule } from '@nestjs/testing';
import { PaneController } from './pane.controller';
import { PaneService } from './pane.service';

describe('PaneController', () => {
  let controller: PaneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaneController],
      providers: [PaneService],
    }).compile();

    controller = module.get<PaneController>(PaneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
