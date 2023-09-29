import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class EmpresaModel {
    @Field()
    nome: string;
    @Field()
    email: string;
    @Field()
    telefone: string;
    @Field()
    cnpj: string;
}