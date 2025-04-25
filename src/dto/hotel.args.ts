import { ArgsType, Field, InputType, Int } from "@nestjs/graphql";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { orderFieldDirection } from '@enum/orderFieldDirection.enum';



@ArgsType()
export class GetHotelsArgs {
    @Field({ nullable: true })
    @IsOptional()
    name?: string;

    @Field({ nullable: true })
    @IsOptional()
    location?: string;

    @Field(() => Int)
    @IsNotEmpty()
    @IsNumber()
    offset: number;

    @Field(() => Int)
    @IsNotEmpty()
    @IsNumber()
    limit: number;

    @Field({ nullable: true })
    @IsOptional()
    @IsString()
    orderByField?: string;

    @Field(type => orderFieldDirection)
    @IsOptional()
    @IsEnum(orderFieldDirection)
    orderFieldDirection?: orderFieldDirection;
}

@InputType()
export class CreateHotel {
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
export class UpdateHotel {
    @Field({ nullable: true })
    @IsOptional()
    @MaxLength(50)
    name?: string;

    @Field({ nullable: true })
    @IsOptional()
    location?: string;

    @Field({ nullable: true })
    @IsOptional()
    description?: string;
}