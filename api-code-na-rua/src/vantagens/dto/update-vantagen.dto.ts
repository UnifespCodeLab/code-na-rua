import { PartialType } from '@nestjs/mapped-types';
import { CreateVantagenDto } from './create-vantagen.dto';

export class UpdateVantagenDto extends PartialType(CreateVantagenDto) {}
