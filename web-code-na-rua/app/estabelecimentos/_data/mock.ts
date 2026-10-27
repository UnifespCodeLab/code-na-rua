// US10 — Reputação de estabelecimentos parceiros

export type CriterioId = "tempo" | "respeito" | "organizacao" | "estrutura";

export interface Criterio {
  id: CriterioId;
  rotulo: string;
  descricao: string;
}

export const CRITERIOS: Criterio[] = [
  { id: "tempo", rotulo: "Tempo de espera", descricao: "Rapidez na liberação do pedido para coleta." },
  { id: "respeito", rotulo: "Respeito ao entregador", descricao: "Tratamento recebido durante a coleta." },
  { id: "organizacao", rotulo: "Organização da retirada", descricao: "Clareza e ordem no processo de retirada." },
  { id: "estrutura", rotulo: "Estrutura disponível", descricao: "Banheiro, espera coberta, água e apoio ao entregador." },
];

export interface NotasPorCriterio {
  tempo: number;
  respeito: number;
  organizacao: number;
  estrutura: number;
}

export interface Avaliacao {
  id: string;
  autor: string;
  data: string;
  comentario?: string;
  notas: NotasPorCriterio;
}

export interface Estabelecimento {
  id: string;
  nome: string;
  categoria: string;
  bairro: string;
  cidade: string;
  parceiro: boolean;
  totalAvaliacoes: number;
  mediaPorCriterio: NotasPorCriterio;
  avaliacoesRecentes: Avaliacao[];
}

export function mediaGeral(n: NotasPorCriterio): number {
  return (n.tempo + n.respeito + n.organizacao + n.estrutura) / 4;
}

export const ESTABELECIMENTOS: Estabelecimento[] = [
  {
    id: "burguer-do-vale",
    nome: "Burguer do Vale",
    categoria: "Hamburgueria",
    bairro: "Centro",
    cidade: "São José dos Campos",
    parceiro: true,
    totalAvaliacoes: 128,
    mediaPorCriterio: { tempo: 4.6, respeito: 4.8, organizacao: 4.4, estrutura: 4.2 },
    avaliacoesRecentes: [
      {
        id: "a1",
        autor: "Carlos M.",
        data: "2026-10-20",
        comentario: "Sempre liberam rápido e tem lugar na sombra pra esperar.",
        notas: { tempo: 5, respeito: 5, organizacao: 4, estrutura: 4 },
      },
      {
        id: "a2",
        autor: "Fernanda R.",
        data: "2026-10-18",
        comentario: "Pessoal educado, mas a fila de retirada às vezes se mistura.",
        notas: { tempo: 4, respeito: 5, organizacao: 4, estrutura: 4 },
      },
    ],
  },
  {
    id: "pizzaria-trattoria",
    nome: "Pizzaria Trattoria",
    categoria: "Pizzaria",
    bairro: "Jardim Aquarius",
    cidade: "São José dos Campos",
    parceiro: true,
    totalAvaliacoes: 94,
    mediaPorCriterio: { tempo: 3.2, respeito: 4.1, organizacao: 3.6, estrutura: 2.8 },
    avaliacoesRecentes: [
      {
        id: "b1",
        autor: "João P.",
        data: "2026-10-22",
        comentario: "Comida pronta demora nos horários de pico.",
        notas: { tempo: 3, respeito: 4, organizacao: 4, estrutura: 3 },
      },
      {
        id: "b2",
        autor: "Anderson L.",
        data: "2026-10-15",
        notas: { tempo: 3, respeito: 4, organizacao: 3, estrutura: 2 },
      },
    ],
  },
  {
    id: "acai-da-praca",
    nome: "Açaí da Praça",
    categoria: "Açaí e lanches",
    bairro: "Vila Adyana",
    cidade: "São José dos Campos",
    parceiro: true,
    totalAvaliacoes: 61,
    mediaPorCriterio: { tempo: 4.9, respeito: 4.7, organizacao: 4.8, estrutura: 3.9 },
    avaliacoesRecentes: [
      {
        id: "c1",
        autor: "Marcos V.",
        data: "2026-10-21",
        comentario: "Um dos mais rápidos da região. Recomendo.",
        notas: { tempo: 5, respeito: 5, organizacao: 5, estrutura: 4 },
      },
    ],
  },
  {
    id: "cantina-da-nona",
    nome: "Cantina da Nona",
    categoria: "Comida caseira",
    bairro: "Santana",
    cidade: "São José dos Campos",
    parceiro: true,
    totalAvaliacoes: 37,
    mediaPorCriterio: { tempo: 2.4, respeito: 2.9, organizacao: 2.6, estrutura: 2.1 },
    avaliacoesRecentes: [
      {
        id: "d1",
        autor: "Rafael S.",
        data: "2026-10-12",
        comentario: "Demora bastante e não tem onde esperar. Precisa melhorar.",
        notas: { tempo: 2, respeito: 3, organizacao: 2, estrutura: 2 },
      },
    ],
  },
  {
    id: "sushi-express",
    nome: "Sushi Express",
    categoria: "Japonesa",
    bairro: "Jardim Esplanada",
    cidade: "São José dos Campos",
    parceiro: true,
    totalAvaliacoes: 152,
    mediaPorCriterio: { tempo: 4.0, respeito: 4.3, organizacao: 4.5, estrutura: 4.1 },
    avaliacoesRecentes: [
      {
        id: "e1",
        autor: "Thiago B.",
        data: "2026-10-23",
        comentario: "Organização de retirada muito boa, cada pedido numerado.",
        notas: { tempo: 4, respeito: 4, organizacao: 5, estrutura: 4 },
      },
    ],
  },
  {
    id: "padaria-estrela",
    nome: "Padaria Estrela",
    categoria: "Padaria",
    bairro: "Monte Castelo",
    cidade: "São José dos Campos",
    parceiro: true,
    totalAvaliacoes: 18,
    mediaPorCriterio: { tempo: 3.8, respeito: 4.6, organizacao: 3.9, estrutura: 3.3 },
    avaliacoesRecentes: [],
  },
];
