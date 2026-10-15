import { Injectable } from '@nestjs/common';
import { CreateVantagenDto } from './dto/create-vantagen.dto';
import { UpdateVantagenDto } from './dto/update-vantagen.dto';

@Injectable()
export class VantagensService {
  create(createVantagenDto: CreateVantagenDto) {
    return 'This action adds a new vantagen';
  }

  findAll() {
    return `This action returns all vantagens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vantagen`;
  }

  update(id: number, updateVantagenDto: UpdateVantagenDto) {
    return `This action updates a #${id} vantagen`;
  }

  remove(id: number) {
    return `This action removes a #${id} vantagen`;
  }
}
