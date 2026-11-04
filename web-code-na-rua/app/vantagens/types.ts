export type Parceiro = {
  id: number;
  nome: string;
  categoria: string;
  endereco: string;
  descricao: string;
  avaliacao: {
    media: number;
    quantidade: number;
  };
  localizacao: {
    latitude: number;
    longitude: number;
  };
  beneficios: {
    id: number;
    descricao: string;
  }[];
};
