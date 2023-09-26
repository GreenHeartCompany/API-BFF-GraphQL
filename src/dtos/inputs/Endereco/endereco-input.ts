import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class EnderecoInput {
    @Field()
    logradouro: string;
    @Field()
    cep: string;
    @Field()
    numero: string;
    @Field()
    complemento: string;
}