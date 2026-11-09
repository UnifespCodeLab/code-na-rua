import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { VantagensModule } from './vantagens/vantagens.module';
import { PaneModule } from './pane/pane.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Emergencia } from './emergencia/entities/emergencia.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AvaliacaoModule,
    PaneModule,
    VantagensModule,
    UsuarioModule,
    Emergencia,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
