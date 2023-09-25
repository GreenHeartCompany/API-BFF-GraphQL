import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class AutenticacaoResponse {
    @Field()
    nome: string;
    @Field()
    tipoUsuario: string;
    @Field()
    token: string;
}