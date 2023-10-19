import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { BaseContext } from "../dtos/models/Context/context-model";
import { PublicacaoModel } from "../dtos/models/Publicacao/publicacao-model";
import { BuscarPorId, BuscarPublicacoes, FiltrarPorTipo } from "../services/publicacao.service";
import { FiltroPublicacaoInput } from "../dtos/inputs/Publicacao/publicacao-filtro-input";

@Resolver()
export class PublicacaoResolver {
    @Query(() => [PublicacaoModel])
    async ListarPublicacoes(@Ctx() context: BaseContext): Promise<[PublicacaoModel]> {
        const result = await BuscarPublicacoes(context.token);
        return result;
    }

    @Mutation(() => PublicacaoModel)
    async BuscarPublicacaoPorId(@Ctx() context: BaseContext, @Arg("id", { validate: false }) id: number) {
        const result = await BuscarPorId(context.token, id);
        return result;
    }

    @Query(() => [PublicacaoModel])
    async FiltrarPorTipo(@Ctx() context: BaseContext, @Arg("data", { validate: false }) data: FiltroPublicacaoInput) {
        const result = await FiltrarPorTipo(context.token, data);
        return result;
    }
}