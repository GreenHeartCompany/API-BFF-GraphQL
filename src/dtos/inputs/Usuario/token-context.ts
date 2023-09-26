import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class TokenContext {
    @Field()
    token: string;
};
