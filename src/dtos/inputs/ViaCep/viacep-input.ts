import { InputType, Field } from "type-graphql";

@InputType()
export class ViaCepInput {
    @Field()
    cep: string;
}