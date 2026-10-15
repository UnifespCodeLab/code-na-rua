import { PartialType } from '@nestjs/mapped-types';
import { CreateEmergenciaDto } from './create-emergencia.dto';

export class UpdateEmergenciaDto extends PartialType(CreateEmergenciaDto) {}
