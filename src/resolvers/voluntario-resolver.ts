import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { VoluntarioInput } from "../dtos/inputs/Voluntario/voluntario-input";
import { BaseResponse } from "../utils/classes/BaseResponse";
import { CadastrarVoluntario } from "../service/voluntario-service";


@Resolver()
export class VoluntarioResolver {
    @Mutation(() => BaseResponse)
    async viaCep(@Arg("data") data: VoluntarioInput) {
        const result = await CadastrarVoluntario(data);
        return result;
    }
}