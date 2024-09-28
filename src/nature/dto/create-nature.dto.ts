import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNatureDto {
  @ApiProperty({ example: 'Mountain Sunrise', description: 'Название объекта природы' })
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;
}