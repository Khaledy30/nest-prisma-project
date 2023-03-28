import { Injectable } from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: ProductDTO) {
    const productAlreadyExists = await this.prisma.product.findFirst({
      where: {
        ean: data.ean,
      },
    });

    if (productAlreadyExists) {
      throw new Error('Product already exists');
    }

    const product = await this.prisma.product.create({
      data,
    });

    return product;
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async updateProduct(id: string, data: ProductDTO) {
    const productAlreadyExists = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!productAlreadyExists) {
      throw new Error('Product not exist');
    }

    return await this.prisma.product.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteProduct(id: string) {
    const productAlreadyExists = await this.prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!productAlreadyExists) {
      throw new Error('Product not exist');
    }

    await this.prisma.product.delete({
      where: {
        id,
      },
    });

    return true
  }
}
