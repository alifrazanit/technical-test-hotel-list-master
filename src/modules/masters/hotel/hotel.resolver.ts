import { Args, Query, Resolver } from '@nestjs/graphql';
import { Hotel } from '@models/hotel.model';
import { GetHotelsArgs } from '@dto/hotel.args';


@Resolver(() => Hotel)
export class HotelResolver {
    constructor() { }

    @Query(() => Hotel)
    async getHotel(@Args() args: GetHotelsArgs) {
        
    }
}
