import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class BaseResponse{
    @Field()
    statusCode: number;
    @Field()
    message: string;
}