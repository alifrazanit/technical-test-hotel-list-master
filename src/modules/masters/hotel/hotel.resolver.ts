import { Args, Query, Resolver } from '@nestjs/graphql';
import { Hotel } from '@models/hotel.model';
import { GetHotelsArgs } from '@dto/hotel.args';
import { HotelService } from '@services/hotel/hotel.service';


@Resolver(() => Hotel)
export class HotelResolver {
    constructor(
        private hotelService: HotelService
    ) { }

    @Query(() => Hotel)
    async getHotel(@Args() args: GetHotelsArgs) {
        return this.hotelService.getHotels({
            limit: args.limit,
            offset: args.offset,
        })
    }
    
}
