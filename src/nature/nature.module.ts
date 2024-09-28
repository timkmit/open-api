import { Module } from '@nestjs/common';
import { NatureController } from './nature.controller';
import { NatureService } from './nature.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [NatureController],
  providers: [NatureService, PrismaService],
})
export class NatureModule {}