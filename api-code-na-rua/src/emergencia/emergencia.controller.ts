import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmergenciaService } from './emergencia.service';
import { CreateEmergenciaDto } from './dto/create-emergencia.dto';
import { UpdateEmergenciaDto } from './dto/update-emergencia.dto';

@Controller('emergencia')
export class EmergenciaController {
  constructor(private readonly emergenciaService: EmergenciaService) {}

  @Post()
  create(@Body() createEmergenciaDto: CreateEmergenciaDto) {
    return this.emergenciaService.create(createEmergenciaDto);
  }

  @Get()
  findAll() {
    return this.emergenciaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emergenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmergenciaDto: UpdateEmergenciaDto) {
    return this.emergenciaService.update(+id, updateEmergenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emergenciaService.remove(+id);
  }
}
