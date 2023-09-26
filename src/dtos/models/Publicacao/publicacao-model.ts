import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class PublicacaoModel {
    @Field()
    id: number;
    @Field()
    titulo: string;
    @Field()
    tipoAcao: string;
    @Field()
    totalHrTrabalho: number;
    @Field()
    nomeOrganizador: string;
    @Field()
    emailOrganizador: string;
    @Field()
    telOrganizador: string;
    @Field()
    fkEmpresa: string;
}