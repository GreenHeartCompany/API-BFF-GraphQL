import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { AutenticacaoInput } from "../dtos/inputs/Usuario/autenticacao-input";
import { AutenticacaoResponse } from "../dtos/models/Usuario/autenticacao-response-model";
import { autenticarUsuario, emailExiste } from "../services/usuario.service";
import { ValidacaoEmailInput } from "../dtos/inputs/Usuario/validacao-email-input";

@Resolver()
export class UsuarioResolver {
    @Mutation(() => AutenticacaoResponse)
    async Autenticar(@Arg("data", { validate: false }) data: AutenticacaoInput) {
        const result = await autenticarUsuario(data)
        return result;
    }

    @Query(() => Boolean)
    async ValidarEmail(@Arg("data", { validate: false }) data: ValidacaoEmailInput) {
        const result = await emailExiste(data);
        return result;
    }
}