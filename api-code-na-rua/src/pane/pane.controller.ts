import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaneService } from './pane.service';
import { CreatePaneDto } from './dto/create-pane.dto';
import { UpdatePaneDto } from './dto/update-pane.dto';

@Controller('pane')
export class PaneController {
  constructor(private readonly paneService: PaneService) {}

  @Post()
  create(@Body() createPaneDto: CreatePaneDto) {
    return this.paneService.create(createPaneDto);
  }

  @Get()
  findAll() {
    return this.paneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaneDto: UpdatePaneDto) {
    return this.paneService.update(+id, updatePaneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paneService.remove(+id);
  }
}
