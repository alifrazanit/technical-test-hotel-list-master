import { registerEnumType } from "@nestjs/graphql";

export enum orderFieldDirection {
    ASC = 'asc',
    DESC = 'desc'
}
registerEnumType(orderFieldDirection, {
    name: 'orderFieldDirection',
    description: 'enum for order asc | desc',
});