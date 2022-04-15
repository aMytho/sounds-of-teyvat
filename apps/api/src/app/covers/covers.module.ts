import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CoversController } from './covers.controller';
import { CoversService } from './covers.service';

@Module({
    imports: [PrismaModule],
    controllers: [CoversController],
    providers: [CoversService]
})
export class CoversModule {}