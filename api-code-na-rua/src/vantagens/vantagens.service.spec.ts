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

  it('returns a rating summary for the mock benefit', () => {
    const beneficio = service.findAll()[0].beneficios[0];

    expect(typeof beneficio.avaliacao.media).toBe('number');
    expect(typeof beneficio.avaliacao.quantidade).toBe('number');
    expect(beneficio.avaliacao.media).toBeGreaterThanOrEqual(1);
    expect(beneficio.avaliacao.media).toBeLessThanOrEqual(5);
    expect(Number.isInteger(beneficio.avaliacao.quantidade)).toBe(true);
    expect(beneficio.avaliacao.quantidade).toBeGreaterThan(0);
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
