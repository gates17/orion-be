import { Module } from '@nestjs/common';
import { TaxesService } from './taxes.service';

@Module({
  providers: [TaxesService]
})
export class TaxesModule {}
