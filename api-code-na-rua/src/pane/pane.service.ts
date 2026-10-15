import { Injectable } from '@nestjs/common';
import { CreatePaneDto } from './dto/create-pane.dto';
import { UpdatePaneDto } from './dto/update-pane.dto';

@Injectable()
export class PaneService {
  create(createPaneDto: CreatePaneDto) {
    return 'This action adds a new pane';
  }

  findAll() {
    return `This action returns all pane`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pane`;
  }

  update(id: number, updatePaneDto: UpdatePaneDto) {
    return `This action updates a #${id} pane`;
  }

  remove(id: number) {
    return `This action removes a #${id} pane`;
  }
}
