import axios from "axios";
import { VoluntarioInput } from "../dtos/inputs/Voluntario/voluntario-input";
import { BaseResponse } from "../utils/classes/BaseResponse";
import { ValidarResponse } from "../utils/classes/validarResponse";
import { handleError } from "../utils/err/handler-erro";
import { VoluntarioModel } from "../dtos/models/Voluntario/voluntario-model";
import { VoluntarioAtualizadoInput } from "../dtos/inputs/Voluntario/voluntario-atualizar-input";

const url = process.env.PATH_API_GREENHEART;

const CadastrarVoluntario = async (data: VoluntarioInput): Promise<BaseResponse> => {
    try {
        const response = await axios.post(url + "/voluntarios/cadastrar", data);
        const result = await ValidarResponse(response);
        return result;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
};

const ListarVoluntarios = async (token: string): Promise<[VoluntarioModel]> => {
    try {
        const headers = { 'Authorization': `${token}` };
        const response = await axios.get(url + "/voluntarios", { headers });
        const result = await ValidarResponse(response.data);
        return response.data;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
}

const AtualizarVoluntario = async (token: string, data: VoluntarioAtualizadoInput): Promise<BaseResponse> => {
    try {
        const headers = { 'Authorization': `${token}` };
        const response = await axios.patch(url + "/voluntarios", data, { headers });
        const result = await ValidarResponse(response.data);
        return response.data;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
}

export {
    CadastrarVoluntario,
    ListarVoluntarios,
    AtualizarVoluntario
};