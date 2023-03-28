import { Module } from '@nestjs/common';
import { ModulesModule } from './products/modules/modules.module';

@Module({
  imports: [ModulesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
