import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Hotel } from '@models/hotel.model';
import { GetHotelsArgs, CreateHotel, UpdateHotel } from '@dto/hotel.args';
import { HotelService } from '@services/hotel/hotel.service';
import { NotFoundException } from '@nestjs/common';


@Resolver(() => Hotel)
export class HotelResolver {
    constructor(
        private hotelService: HotelService
    ) { }

    @Query(() => [Hotel])
    async getHotels(@Args() args: GetHotelsArgs) {
        return this.hotelService.getHotels({
            limit: args.limit,
            offset: args.offset,
            where: {
                name: args.name ? { contains: args.name } : undefined,
                location: args.location ? { contains: args.location } : undefined
            }
        })
    }

    @Query(() => Hotel)
    async getHotel(@Args('id', { type: () => Int }) id: number) {
        const hotel = await this.hotelService.getHotel({ id });
        if (!hotel) {
            throw new NotFoundException();
        }
        return hotel;
    }

    @Mutation(() => Hotel)
    async createHotel(@Args('data') data: CreateHotel) {
        const { name, description, location } = data;
        const dataDesc = description ? description : '';
        return this.hotelService.createHotel({
            name,
            description: dataDesc,
            location,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }

    @Mutation(() => Hotel)
    async updateHotel(
        @Args('id', { type: () => Int }) id: number,
        @Args('data') data: UpdateHotel
    ) {
        return this.hotelService.updateHotel({
            data,
            where: {
                id
            }
        })
    }

    @Mutation(() => Hotel)
    async deleteHotel(
        @Args('id', { type: () => Int }) id: number
    ) {
        return this.hotelService.deleteHotel({
            id
        })
    }
}
