import { Injectable } from '@nestjs/common';
import { PrismaService } from '@services/prisma/prisma.service';
import { Hotel, Prisma } from '@prisma/client';


@Injectable()
export class HotelService {
    constructor(private prisma: PrismaService) { }

    async getHotels(params: {
        offset?: number,
        limit?: number,
        where?: Prisma.HotelWhereInput
    }): Promise<Hotel[]> {
        const { offset, limit, where } = params;
        return this.prisma.hotel.findMany({
            skip: offset,
            take: limit,
            where,
        })
    }

    async getHotel(HotelWhereUniqueInput: Prisma.HotelWhereUniqueInput): Promise<Hotel | null> {
        return this.prisma.hotel.findUnique({
            where: HotelWhereUniqueInput
        })
    }

    async createHotel(data: Prisma.HotelCreateInput): Promise<Hotel> {
        return this.prisma.hotel.create({ data });
    }

    async updateHotel(params: {
        where: Prisma.HotelWhereUniqueInput,
        data: Prisma.HotelUpdateInput
    }) {
        const { data, where } = params;
        return this.prisma.hotel.update({
            data,
            where
        })
    }

    async deleteHotel(
        where: Prisma.HotelWhereUniqueInput
    ): Promise<Hotel> {
        return this.prisma.hotel.delete({
            where
        })
    }
}
