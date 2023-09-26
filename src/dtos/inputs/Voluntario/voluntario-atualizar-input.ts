import { Field, InputType } from "type-graphql";
import { TipoUsuario } from "../../../utils/enums/tipo-usuario"
import { EnderecoInput } from "../Endereco/endereco-input";

@InputType()
export class VoluntarioAtualizadoInput {
    @Field()
    id: number;
    @Field()
    nome?: string;
    @Field()
    email?: string;
    @Field()
    senha?: string;
    @Field()
    telefone?: string;
    @Field()
    cpf?: string;
    @Field()
    dtNasc?: Date;
    @Field(() => EnderecoInput)
    endereco?: EnderecoInput;
}