import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NatureService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllNature() {
    return this.prisma.nature.findMany();
  }

  async createNature(data: { title: string }) {
    if (!data.title || data.title.trim() === '') {
      throw new BadRequestException('Title is required');
    }

    return this.prisma.nature.create({
      data,
    });
  }

  async deleteNature(id: string) {
    try {
      const nature = await this.prisma.nature.delete({
        where: { id },
      });
      return nature;
    } catch {
      throw new NotFoundException(`Nature object with ID ${id} not found.`);
    }
  }
}