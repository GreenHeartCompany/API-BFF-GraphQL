import { Arg, Query, Resolver } from "type-graphql";
import { ViaCepResponse } from "../dtos/models/ViaCep/viacep-response-model";
import { BuscarCep } from "../services/viacep-service";
import { ViaCepInput } from "../dtos/inputs/ViaCep/viacep-input";

@Resolver()
export class ViaCepResolver {
    @Query(() => ViaCepResponse)
    async viaCep(@Arg("data", {validate: false}) data: ViaCepInput) {
        const result = await BuscarCep(data.cep);
        return result;
    }
}