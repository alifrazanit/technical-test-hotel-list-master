import { ArgsType, Field, Int } from "@nestjs/graphql";


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