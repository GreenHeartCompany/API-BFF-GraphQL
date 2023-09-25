import { Field, InputType } from "type-graphql";
import { TipoUsuario } from "../../../utils/enums/tipo-usuario"
import { EnderecoInput } from "../Endereco/endereco-input";

@InputType()
export class VoluntarioInput {
    @Field()
    nome: string;
    @Field()
    email: string;
    @Field()
    senha: string;
    @Field()
    tipoUsuario: TipoUsuario.Voluntario;
    @Field()
    telefone: string;
    @Field()
    cpf: string;
    @Field()
    dtNasc: Date;
    @Field()
    endereco: EnderecoInput;
}