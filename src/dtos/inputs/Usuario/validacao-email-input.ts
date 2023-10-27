import { Field, InputType } from "type-graphql";

@InputType()
export class ValidacaoEmailInput {
    @Field()
    email: string;
}
