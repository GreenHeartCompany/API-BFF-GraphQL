import axios from "axios";
import https from "https";
import { AutenticacaoResponse } from "../dtos/models/Usuario/autenticacao-response-model";
import { AutenticacaoInput } from "../dtos/inputs/Usuario/autenticacao-input";
import { handleError } from "../utils/err/handler-erro";
import { ValidarResponse } from "../utils/classes/validarResponse";

const url = process.env.PATH_API_GREENHEART;

const autenticarUsuario = async (data: AutenticacaoInput): Promise<AutenticacaoResponse> => {
    try {
        const response = await axios.post(url + `/usuarios/login`, data, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
        const result = await ValidarResponse(response)
        return result;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
};

export { autenticarUsuario };