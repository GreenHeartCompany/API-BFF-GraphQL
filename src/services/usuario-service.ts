import axios from "axios";
import { AutenticacaoResponse } from "../dtos/models/Usuario/autenticacao-response-model";
import { AutenticacaoInput } from "../dtos/inputs/Usuario/autenticacao-input";
import { handleError } from "../utils/err/handler-erro";

const url = process.env.PATH_API_GREENHEART;

const autenticarUsuario = async (data: AutenticacaoInput): Promise<AutenticacaoResponse> => {
    try {
        const response = await axios.post(url + `/usuarios/login`, data);
        return response.data;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
};

export { autenticarUsuario };