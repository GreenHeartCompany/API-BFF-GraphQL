import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class VoluntarioModel {
    @Field()
    nome: string;
    @Field()
    email: string;
    @Field()
    telefone: string;
    @Field()
    cpf: string;
};