import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { VoluntarioInput } from "../dtos/inputs/Voluntario/voluntario-input";
import { BaseResponse } from "../utils/classes/BaseResponse";
import { BaseContext } from "../dtos/models/Context/context-model";
import { VoluntarioModel } from "../dtos/models/Voluntario/voluntario-model";
import { VoluntarioAtualizadoInput } from "../dtos/inputs/Voluntario/voluntario-atualizar-input";
import {
    AtualizarVoluntario,
    CadastrarVoluntario,
    ListarVoluntarios
} from "../services/voluntario.service";

@Resolver()
export class VoluntarioResolver {
    @Mutation(() => BaseResponse)
    async CadastrarVoluntario(@Arg("data", { validate: false }) data: VoluntarioInput) {
        const result = await CadastrarVoluntario(data);
        return result;
    }

    @Query(() => [VoluntarioModel])
    async ListarVoluntarios(@Ctx() context: BaseContext) {
        const result = await ListarVoluntarios(context.token);
        return result;
    }

    @Mutation(() => BaseResponse)
    async AtualizarVoluntario(@Ctx() context: BaseContext, @Arg("data", { validate: false }) data: VoluntarioAtualizadoInput) {
        const result = await AtualizarVoluntario(context.token, data);
        return result;
    }
}