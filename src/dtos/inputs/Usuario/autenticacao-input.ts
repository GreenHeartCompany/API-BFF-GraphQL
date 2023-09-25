import { Field, InputType } from "type-graphql";

@InputType()
export class AutenticacaoInput {
    @Field()
    email: string;
    @Field()
    senha: string;
}
