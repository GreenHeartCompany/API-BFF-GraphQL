import { Field, ObjectType } from "type-graphql";
import { EmpresaModel } from "../Empresa/empresa-model";

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
    Empresa: EmpresaModel;
}