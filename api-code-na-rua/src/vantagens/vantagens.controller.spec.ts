import { Test, TestingModule } from '@nestjs/testing';
import { VantagensController } from './vantagens.controller';
import { VantagensService } from './vantagens.service';

describe('VantagensController', () => {
  let controller: VantagensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VantagensController],
      providers: [VantagensService],
    }).compile();

    controller = module.get<VantagensController>(VantagensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
