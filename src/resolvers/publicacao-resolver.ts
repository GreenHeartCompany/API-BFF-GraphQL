import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { TokenContext } from "../dtos/inputs/Usuario/token-context";
import { PublicacaoModel } from "../dtos/models/Publicacao/publicacao-model";
import { BuscarPorId, BuscarPublicacoes } from "../services/publicacao-service";

@Resolver()
export class PublicacaoResolver {
    @Query(() => [PublicacaoModel])
    async ListarPublicacoes(@Ctx() context: TokenContext): Promise<[PublicacaoModel]> {
        const result = await BuscarPublicacoes(context.token);
        return result;
    }

    @Mutation(() => PublicacaoModel)
    async BuscarPublicacaoPorId(@Ctx() context: TokenContext, @Arg("id", {validate: false}) id: number) {
        const result = await BuscarPorId(context.token, id);
        return result;
    }
}