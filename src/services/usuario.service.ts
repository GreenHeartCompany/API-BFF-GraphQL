import axios from "axios";
import { AutenticacaoResponse } from "../dtos/models/Usuario/autenticacao-response-model";
import { AutenticacaoInput } from "../dtos/inputs/Usuario/autenticacao-input";
import { handleError } from "../utils/err/handler-erro";
import { validate } from "class-validator";
import { ValidarResponse } from "../utils/classes/validarResponse";
import { ValidacaoEmailInput } from "../dtos/inputs/Usuario/validacao-email-input";

const url = process.env.PATH_API_GREENHEART;

const autenticarUsuario = async (data: AutenticacaoInput): Promise<AutenticacaoResponse> => {
    try {
        const response = await axios.post(url + `/usuarios/login`, data);
        const result = await ValidarResponse(response)
        return result;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
};

const emailExiste = async (data: ValidacaoEmailInput): Promise<Boolean> => {
    try {
        const response = await axios.get(url + `/usuarios/verificar-email/${data.email}`);
        const result = await ValidarResponse(response)
        return result;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
};

export { 
    autenticarUsuario, 
    emailExiste
};