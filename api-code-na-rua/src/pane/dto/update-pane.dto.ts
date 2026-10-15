import { PartialType } from '@nestjs/mapped-types';
import { CreatePaneDto } from './create-pane.dto';

export class UpdatePaneDto extends PartialType(CreatePaneDto) {}
