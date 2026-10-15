import { Module } from '@nestjs/common';
import { PaneService } from './pane.service';
import { PaneController } from './pane.controller';

@Module({
  controllers: [PaneController],
  providers: [PaneService],
})
export class PaneModule {}
