import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './modules.service';
import { ProductDTO } from './product.dto';

@Controller('modules')
export class ProductsController {
  constructor(private readonly modulesService: ProductsService) {}

  @Post()
  async create(@Body() data: ProductDTO) {
    return this.modulesService.create(data);
  }

  @Get()
  async findAll() {
    return this.modulesService.findAll();
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() data: ProductDTO) {
    return this.modulesService.updateProduct(id, data);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.modulesService.deleteProduct(id);
  }
}
