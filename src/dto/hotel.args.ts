import { ArgsType, Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";


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
    @MaxLength(50)
    @IsNotEmpty()
    @IsString()
    name: string;

    @Field()
    @IsNotEmpty({
        message: 'Location wajib tauu'
    })
    @IsString()
    location: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    description?: string;
}

@InputType()
export class UpdateHotel{
    @Field({ nullable: true })
    @MaxLength(50)
    name?: string;

    @Field({ nullable: true })
    location?: string;

    @Field({ nullable: true })
    description?: string;
}