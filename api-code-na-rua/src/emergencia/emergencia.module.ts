import { Module } from '@nestjs/common';
import { EmergenciaService } from './emergencia.service';
import { EmergenciaController } from './emergencia.controller';

@Module({
  controllers: [EmergenciaController],
  providers: [EmergenciaService],
})
export class EmergenciaModule {}
