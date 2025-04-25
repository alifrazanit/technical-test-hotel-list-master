import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Hotel{
    @Field(type => Int)
    id: number;

    @Field({ nullable: false, description: 'Name is Required'})
    name: String;

    @Field({ nullable: false, description: 'location is Required' })
    location: String;

    @Field({ nullable: true, description: 'description is Optional' })
    description?: string;
}