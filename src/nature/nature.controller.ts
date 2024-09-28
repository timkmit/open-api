import { Controller, Get, Post, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { NatureService } from './nature.service';

@Controller('nature')
export class NatureController {
  constructor(private readonly natureService: NatureService) {}

  @Get()
  async getNature() {
    const natureList = await this.natureService.getAllNature();
    if (natureList.length === 0) {
      throw new NotFoundException('No nature objects found');
    }
    return natureList;
  }

  @Post()
  async createNature(@Body() body: { title: string }) {
    return this.natureService.createNature(body);
  }

  @Delete(':id')
  async deleteNature(@Param('id') id: string) {
    return this.natureService.deleteNature(id);
  }
}