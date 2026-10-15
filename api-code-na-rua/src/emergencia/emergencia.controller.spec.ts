import { Test, TestingModule } from '@nestjs/testing';
import { EmergenciaController } from './emergencia.controller';
import { EmergenciaService } from './emergencia.service';

describe('EmergenciaController', () => {
  let controller: EmergenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmergenciaController],
      providers: [EmergenciaService],
    }).compile();

    controller = module.get<EmergenciaController>(EmergenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
