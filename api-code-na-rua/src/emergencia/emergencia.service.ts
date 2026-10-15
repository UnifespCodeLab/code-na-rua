import { Injectable } from '@nestjs/common';
import { CreateEmergenciaDto } from './dto/create-emergencia.dto';
import { UpdateEmergenciaDto } from './dto/update-emergencia.dto';

@Injectable()
export class EmergenciaService {
  create(createEmergenciaDto: CreateEmergenciaDto) {
    return 'This action adds a new emergencia';
  }

  findAll() {
    return `This action returns all emergencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emergencia`;
  }

  update(id: number, updateEmergenciaDto: UpdateEmergenciaDto) {
    return `This action updates a #${id} emergencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} emergencia`;
  }
}
