import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VantagensService } from './vantagens.service';
import { CreateVantagemDto } from './dto/create-vantagem.dto';
import { UpdateVantagemDto } from './dto/update-vantagem.dto';

@Controller('vantagens')
export class VantagensController {
  constructor(private readonly vantagensService: VantagensService) {}

  @Post()
  create(@Body() createVantagemDto: CreateVantagemDto) {
    return this.vantagensService.create(createVantagemDto);
  }

  @Get()
  findAll() {
    return this.vantagensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vantagensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVantagemDto: UpdateVantagemDto) {
    return this.vantagensService.update(+id, updateVantagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vantagensService.remove(+id);
  }
}
