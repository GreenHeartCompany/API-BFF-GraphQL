import axios from "axios";
import { handleError } from "../utils/err/handler-erro";
import { PublicacaoModel } from "../dtos/models/Publicacao/publicacao-model";
import { ValidarResponse } from "../utils/classes/validarResponse";
import { TipoPublicacao } from "../utils/enums/tipo-publicacao";

const url = process.env.PATH_API_GREENHEART;

const BuscarPublicacoes = async (token: string): Promise<[PublicacaoModel]> => {
    try {
        const headers = { Authorization: `${token}` };
        const response = await axios.get(url + `/publicacoes`, { headers })
        const result = await ValidarResponse(response);
        return response.data;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
}

const BuscarPorId = async (token: string, id: number): Promise<PublicacaoModel> => {
    try {
        const headers = { Authorization: `${token}` };
        const response = await axios.get(process.env.PATH_API_GREENHEART + `/publicacoes/${id}`, { headers });
        const result = await ValidarResponse(response);
        return response.data;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
}

const FiltrarPorTipo = async (token: string, tipo: TipoPublicacao): Promise<[PublicacaoModel]> => {
    try {
        const headers = { Authorization: `${token}` };
        const response = await axios.get(process.env.PATH_API_GREENHEART + `/publicacoes/filtrar/${tipo}`, { headers });
        const result = await ValidarResponse(response);
        return response.data;
    } catch (e) {
        handleError(e)
        throw new Error();
    }
}

export {
    BuscarPublicacoes,
    BuscarPorId,
    FiltrarPorTipo
}