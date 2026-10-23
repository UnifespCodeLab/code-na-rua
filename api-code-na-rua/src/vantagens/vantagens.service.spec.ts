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

  it('should return partners', () => {
    const parceiros = service.findAll();

    expect(Array.isArray(parceiros)).toBe(true); // retorna lista
    expect(parceiros.length).toBeGreaterThen(0); // lista nao vazia

    for (const parceiro of parceiros) {          // dados com tipo correto
      expect(parceiro).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          nome: expect.any(String),
          categoria: expect.any(String),
          endereco: expect.any(String),
          localizacao: expect.objectContaining({ 
            latitude: expect.any(Number), 
            longitude: expect.any(Number), 
          }),
          beneficios: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              descricao: expect.any(String),
            }),
          ]),
        })
      );
    }
  })
});
