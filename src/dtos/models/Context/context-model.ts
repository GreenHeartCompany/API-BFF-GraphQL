import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class BaseContext {
    @Field()
    token: string;
    @Field()
    url: string;
};
