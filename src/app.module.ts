import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { NatureModule } from './nature/nature.module';
import { PrismaService } from './prisma/prisma.service';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

@Module({
  imports: [NatureModule],
  providers: [
    PrismaService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}