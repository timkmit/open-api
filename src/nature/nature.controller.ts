import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { NatureService } from './nature.service';
import { CreateNatureDto } from './dto/create-nature.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Nature')
@Controller('nature')
export class NatureController {
  constructor(private readonly natureService: NatureService) {}

  @Get()
  @ApiOperation({ summary: 'Получение всех объектов природы' })
  @ApiResponse({ status: 200, description: 'Возвращает список объектов' })
  async getNature() {
    return this.natureService.getAllNature();
  }

  @Post()
  @ApiOperation({ summary: 'Создание нового объекта природы' })
  @ApiBody({ type: CreateNatureDto })
  @ApiResponse({ status: 201, description: 'Объект природы успешно создан' })
  async createNature(@Body() createNatureDto: CreateNatureDto) {
    return this.natureService.createNature(createNatureDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удаление объекта природы по ID' })
  @ApiParam({ name: 'id', description: 'ID объекта' })
  @ApiResponse({ status: 200, description: 'Объект успешно удален' })
  @ApiResponse({ status: 404, description: 'Объект с данным ID не найден' })
  async deleteNature(@Param('id') id: string) {
    return this.natureService.deleteNature(id);
  }
}