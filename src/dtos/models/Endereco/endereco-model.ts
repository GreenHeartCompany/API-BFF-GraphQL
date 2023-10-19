import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class EndereceModel {
    @Field()  
    logradouro: string;
    @Field()
    cep: string;
    @Field()
    numero: string;
    @Field()
    complemento: string;
}