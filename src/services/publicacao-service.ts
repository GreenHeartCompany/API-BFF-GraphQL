import axios from "axios";
import { handleError } from "../utils/err/handler-erro";
import { PublicacaoModel } from "../dtos/models/Publicacao/publicacao-model";
import { ValidarResponse } from "../utils/classes/validarResponse";
import { TipoPublicacao } from "../utils/enums/tipo-publicacao";
import { FiltroPublicacaoInput } from "../dtos/inputs/Publicacao/publicacao-filtro-input";

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
        const response = await axios.get(process.env.PATH_API_GREENHEART + `/publicacoes/${id}`, {
            headers: {
                Authorization: `${token}`
            }
        });
        const result = await ValidarResponse(response);
        return response.data;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
}

const FiltrarPorTipo = async (token: string, data: FiltroPublicacaoInput): Promise<[PublicacaoModel]> => {
    try {
        const response = await axios.get(process.env.PATH_API_GREENHEART + `/publicacoes/filtrar/${data.filtro}`, {
            headers: {
                Authorization: `${token}`
            }
        });
        const result = await ValidarResponse(response);
        return result;
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