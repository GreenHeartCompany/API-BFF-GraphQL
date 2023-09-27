import { InputType, Field } from "type-graphql";

@InputType()
export class ViaCepInput {
    @Field(() => String)
    cep: string;
}