import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class EmpresaModel {
    @Field()
    idUsuario: number;
    @Field()
    nome: string;
    @Field()
    email: string;
    @Field()
    telefone: string;
    @Field()
    cnpj: string;
}