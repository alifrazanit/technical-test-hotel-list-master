import { ArgsType, Field, InputType, Int } from "@nestjs/graphql";


@ArgsType()
export class GetHotelsArgs {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    location?: string;

    @Field(() => Int)
    offset: number;

    @Field(() => Int)
    limit: number;
}

@InputType()
export class CreateHotel{
    @Field({ nullable: false })
    name: string;

    @Field({ nullable: false })
    location: string;

    @Field({ nullable: false })
    description: string;
}