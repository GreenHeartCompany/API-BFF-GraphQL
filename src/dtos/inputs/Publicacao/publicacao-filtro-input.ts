import { Field, InputType } from "type-graphql";
import { TipoPublicacao } from "../../../utils/enums/tipo-publicacao";

@InputType()
export class FiltroPublicacaoInput {
    @Field(() => TipoPublicacao)
    filtro: TipoPublicacao;
}