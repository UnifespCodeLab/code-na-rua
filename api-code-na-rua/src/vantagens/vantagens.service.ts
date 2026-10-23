import { Injectable } from '@nestjs/common';
import { CreateVantagemDto } from './dto/create-vantagem.dto';
import { UpdateVantagemDto } from './dto/update-vantagem.dto';

@Injectable()
export class VantagensService {
  create(createVantagemDto: CreateVantagemDto) {
    return 'This action adds a new vantagem';
  }

  findAll() {
    return [
      {
        id: 0,
        nome: 'Parceiro 1',
        categoria: 'Categoria A',
        endereco: 'Endereco 1',
        localizacao: { latitude: -12.34, longitude: -45.67 },
        beneficios: [
          {
            id: 1,
            descricao: 'Beneficio 1',
            // shortcut: resumo fixo no mock, calcular a partir das notas quando houver envio de avaliações.
            avaliacao: { media: 4.5, quantidade: 2 },
          },
        ],
      },
    ];
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
