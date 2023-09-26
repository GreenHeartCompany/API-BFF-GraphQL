import axios from "axios";
import { VoluntarioInput } from "../dtos/inputs/Voluntario/voluntario-input";
import { BaseResponse } from "../utils/classes/BaseResponse";
import { ValidarResponse } from "../utils/classes/validarResponse";
import { handleError } from "../utils/err/handler-erro";
import { VoluntarioModel } from "../dtos/models/Voluntario/voluntario-model";
import { VoluntarioAtualizadoInput } from "../dtos/inputs/Voluntario/voluntario-atualizar-input";

const CadastrarVoluntario = async (data: VoluntarioInput): Promise<BaseResponse> => {
    try {
        const response = await axios.post("http://localhost:8080/api/voluntarios/cadastrar", data);
        const result = await ValidarResponse(response);
        return result;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
};

const ListarVoluntarios = async (token: string): Promise<[VoluntarioModel]> => {
    try {
        const headers = { 'Authorization': `Bearer ${token}` };
        const response = await axios.get("http://localhost:8080/api/voluntarios", { headers });
        const result = await ValidarResponse(response.data);
        return response.data;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
}

const AtualizarVoluntario = async (token: string, data: VoluntarioAtualizadoInput): Promise<BaseResponse> => {
    try{
        const headers = { 'Authorization': `Bearer ${token}` };
        const response = await axios.patch("http://localhost:8080/api/voluntarios", data, { headers });
        const result = await ValidarResponse(response.data);
        return response.data;
    } catch(e) {
        handleError(e);
        throw new Error();
    }
}

export {
    CadastrarVoluntario,
    ListarVoluntarios,
    AtualizarVoluntario
};