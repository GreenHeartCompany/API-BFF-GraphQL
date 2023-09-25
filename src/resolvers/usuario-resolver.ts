import { Arg, Query, Resolver } from "type-graphql"
import { AutenticacaoInput } from "../dtos/inputs/Usuario/autenticacao-input";
import { AutenticacaoResponse } from "../dtos/models/autenticacao-response-model";

@Resolver()
export class UsuarioResolver {
    @Query(() => AutenticacaoResponse)
    async autenticar(@Arg("data") data: AutenticacaoInput){
        return null;
    }
}