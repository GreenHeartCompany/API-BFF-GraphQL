import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class AutenticacaoResponse {
    @Field()
    token: string;
}