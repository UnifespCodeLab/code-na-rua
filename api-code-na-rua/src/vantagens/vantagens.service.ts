import { Injectable } from '@nestjs/common';
import { CreateVantagemDto } from './dto/create-vantagem.dto';
import { UpdateVantagemDto } from './dto/update-vantagem.dto';

// REMOVER QUANDO O SISTEMA POSSUIR BANCO DE DADOS
const BENEFICIO_1 = {
  id: 1,
  descricao: 'Beneficio 1',
  // shortcut: resumo fixo no mock, calcular a partir das notas quando houver envio de avaliações.
  avaliacao: { media: 4.5, quantidade: 2 },
};
const BENEFICIO_2 = {
  id: 2,
  descricao: 'Beneficio 2',
  avaliacao: { media: 4.7, quantidade: 16 },
};
const BENEFICIO_3 = {
  id: 3,
  descricao: 'Beneficio 3',
  avaliacao: { media: 3.3, quantidade: 104 },
};
const BENEFICIO_4 = {
  id: 4,
  descricao: 'Beneficio 4',
  avaliacao: { media: 2.9, quantidade: 58 },
};
const BENEFICIO_5 = {
  id: 5,
  descricao: 'Beneficio 5',
  avaliacao: { media: 4.8, quantidade: 21 },
};
const DB_MOCK = [
  {
    id: 0,
    nome: 'Parceiro 1',
    categoria: 'Categoria A',
    endereco: 'Endereco 1',
    localizacao: { latitude: -12.34, longitude: -45.67 },
    beneficios: [BENEFICIO_1],
  },
  {
    id: 1,
    nome: 'Parceiro 2',
    categoria: 'Categoria B',
    endereco: 'Endereco 2',
    localizacao: { latitude: -89.12, longitude: -34.56 },
    beneficios: [BENEFICIO_3, BENEFICIO_5],
  },
  {
    id: 3,
    nome: 'Parceiro 3',
    categoria: 'Categoria A',
    endereco: 'Endereco 5',
    localizacao: { latitude: 78.9, longitude: -12.34 },
    beneficios: [BENEFICIO_2, BENEFICIO_4],
  },
];

@Injectable()
export class VantagensService {
  create(createVantagemDto: CreateVantagemDto) {
    return 'This action adds a new vantagem';
  }

  findAll() {
    return DB_MOCK;
  }

  findOne(id: number) {
    return `This action returns a #${id} vantagem`;
  }

  update(id: number, updateVantagemDto: UpdateVantagemDto) {
    return `This action updates a #${id} vantagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} vantagem`;
  }
}
