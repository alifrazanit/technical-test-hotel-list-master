import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Hotel } from '@models/hotel.model';
import { GetHotelsArgs, CreateHotel } from '@dto/hotel.args';
import { HotelService } from '@services/hotel/hotel.service';


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

    @Mutation(() => Hotel)
    async createHotel(@Args('data') data: CreateHotel) {
        const { name, description, location } = data;
        return this.hotelService.createHotel({
            name,
            description,
            location,
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }


}
