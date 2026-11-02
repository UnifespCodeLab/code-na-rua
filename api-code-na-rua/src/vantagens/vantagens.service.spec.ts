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
    expect(parceiros.length).toBeGreaterThan(0); // lista nao vazia

    for (const parceiro of parceiros) {          // dados com tipo correto
      expect(parceiro).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          nome: expect.any(String),
          categoria: expect.any(String),
          descricao: expect.any(String),
          endereco: expect.any(String),
          localizacao: expect.objectContaining({ 
            latitude: expect.any(Number), 
            longitude: expect.any(Number), 
          }),
          avaliacao: expect.objectContaining({
            media: expect.any(Number),
            quantidade: expect.any(Number)
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

  it('returns a rating summary for each mock partner', () => {
    for (const parceiro of service.findAll()) {
      expect(typeof parceiro.avaliacao.media).toBe('number');
      expect(typeof parceiro.avaliacao.quantidade).toBe('number');
      expect(parceiro.avaliacao.media).toBeGreaterThanOrEqual(1);
      expect(parceiro.avaliacao.media).toBeLessThanOrEqual(5);
      expect(Number.isInteger(parceiro.avaliacao.quantidade)).toBe(true);
      expect(parceiro.avaliacao.quantidade).toBeGreaterThan(0);
    }
  });

  it('each partner description should have less then 100 characters', () => {
    for(const parceiro of service.findAll()) {
      const descricao = parceiro.descricao;
      expect(typeof descricao).toBe('string');
      expect(descricao.length).toBeLessThanOrEqual(100);
    }
  });

  it('returns unique benefits for each partner', () => {
    const parceiros = service.findAll();
    const ids = parceiros.flatMap((parceiro) => 
      parceiro.beneficios.map((beneficio) => beneficio.id)
    );
    
    // Ao extrairmos todos os ids de todos os parceiros, comparamos a lista obtida
    // com um set desses ids. Dessa forma, se ambas estruturas possuirem exatamente
    // o mesmo tamanho, sabemos que nao ha repeticoes de ids, uma vez que um set
    // nao possui valores repetidos.
    expect(new Set(ids).size).toBe(ids.length);
  });
});
