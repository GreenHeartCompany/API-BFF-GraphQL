import axios from "axios";
import https from "https";
import { ViaCepResponse } from "../dtos/models/ViaCep/viacep-response-model";
import { handleError } from "../utils/err/handler-erro";
import { ValidarResponse } from "../utils/classes/validarResponse";

const url = process.env.PATH_API_VIACEP;

const BuscarCep = async (cep: string): Promise<ViaCepResponse> => {
    try {
        const response = await axios.get(url + `/${cep}/json/`, { httpsAgent: new https.Agent({ rejectUnauthorized: false }) });
        const result = await ValidarResponse(response);
        return result;
    } catch (e) {
        handleError(e)
        throw new Error();
    }
};

export { BuscarCep };