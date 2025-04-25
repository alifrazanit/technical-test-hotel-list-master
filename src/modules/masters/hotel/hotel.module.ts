import { Module } from '@nestjs/common';
import { HotelResolver } from './hotel.resolver';
import { HotelService } from '@services/hotel/hotel.service';
import { PrismaService } from '@services/prisma/prisma.service';

@Module({
    providers: [
        HotelResolver,
        HotelService,
        PrismaService
    ]
})
export class HotelModule {}
