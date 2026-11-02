import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVantagemDto } from './dto/create-vantagem.dto';
import { UpdateVantagemDto } from './dto/update-vantagem.dto';

// REMOVER QUANDO O SISTEMA POSSUIR BANCO DE DADOS
const BENEFICIO_1 = {
  id: 1,
  descricao: 'Beneficio 1',
};
const BENEFICIO_2 = {
  id: 2,
  descricao: 'Beneficio 2',
};
const BENEFICIO_3 = {
  id: 3,
  descricao: 'Beneficio 3',
};
const BENEFICIO_4 = {
  id: 4,
  descricao: 'Beneficio 4',
};
const BENEFICIO_5 = {
  id: 5,
  descricao: 'Beneficio 5',
};
const DB_MOCK = [
  {
    id: 0,
    nome: 'Parceiro 1',
    categoria: 'Categoria A',
    descricao: 'Tipo de desconto',
    endereco: 'Endereco 1',
    localizacao: { latitude: -12.34, longitude: -45.67 },    
    // shortcut: resumo fixo no mock, calcular a partir das notas quando houver envio de avaliações.
    avaliacao: { media: 4.5, quantidade: 2 },
    beneficios: [BENEFICIO_1],
  },
  {
    id: 1,
    nome: 'Parceiro 2',
    categoria: 'Categoria B',
    descricao: 'Serviço específico',
    endereco: 'Endereco 2',
    localizacao: { latitude: -89.12, longitude: -34.56 },
    avaliacao: { media: 4.7, quantidade: 16 },
    beneficios: [BENEFICIO_3, BENEFICIO_5],
  },
  {
    id: 3,
    nome: 'Parceiro 3',
    categoria: 'Categoria A',
    descricao: 'Revisão de peças',
    endereco: 'Endereco 5',
    localizacao: { latitude: 78.9, longitude: -12.34 },
    avaliacao: { media: 2.9, quantidade: 58 },
    beneficios: [BENEFICIO_2, BENEFICIO_4],
  },
];
type Parceiro = (typeof DB_MOCK)[number];

@Injectable()
export class VantagensService {
  create(createVantagemDto: CreateVantagemDto) {
    return 'This action adds a new vantagem';
  }

  findAll() {
    return DB_MOCK;
  }

  findOne(id: number) {
    // temporario, query de bancos dde dados permitem isso sem a seguinte funcao
    const parceiroBuscado = DB_MOCK.find(
      (parceiro) => parceiro.id === id
    );

    if (!parceiroBuscado) throw new NotFoundException('Parceiro nao encontrado');
    return parceiroBuscado;
  }

  update(id: number, updateVantagemDto: UpdateVantagemDto) {
    return `This action updates a #${id} vantagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} vantagem`;
  }
}
