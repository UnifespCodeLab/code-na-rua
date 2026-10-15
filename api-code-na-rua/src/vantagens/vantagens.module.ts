import { Module } from '@nestjs/common';
import { VantagensService } from './vantagens.service';
import { VantagensController } from './vantagens.controller';

@Module({
  controllers: [VantagensController],
  providers: [VantagensService],
})
export class VantagensModule {}
