import { Module } from '@nestjs/common';
import { ProductsService } from './modules.service';
import { ProductsController } from './modules.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
})
export class ModulesModule {}
