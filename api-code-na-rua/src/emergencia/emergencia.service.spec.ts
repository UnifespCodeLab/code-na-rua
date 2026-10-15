import { Test, TestingModule } from '@nestjs/testing';
import { EmergenciaService } from './emergencia.service';

describe('EmergenciaService', () => {
  let service: EmergenciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmergenciaService],
    }).compile();

    service = module.get<EmergenciaService>(EmergenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
