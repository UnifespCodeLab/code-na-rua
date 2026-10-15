import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VantagensService } from './vantagens.service';
import { CreateVantagenDto } from './dto/create-vantagen.dto';
import { UpdateVantagenDto } from './dto/update-vantagen.dto';

@Controller('vantagens')
export class VantagensController {
  constructor(private readonly vantagensService: VantagensService) {}

  @Post()
  create(@Body() createVantagenDto: CreateVantagenDto) {
    return this.vantagensService.create(createVantagenDto);
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
  update(@Param('id') id: string, @Body() updateVantagenDto: UpdateVantagenDto) {
    return this.vantagensService.update(+id, updateVantagenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vantagensService.remove(+id);
  }
}
