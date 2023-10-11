import axios from "axios";
import { ViaCepResponse } from "../dtos/models/ViaCep/viacep-response-model";
import { handleError } from "../utils/err/handler-erro";

const url = process.env.PATH_API_VIACEP;

const BuscarCep = async (cep: string): Promise<ViaCepResponse> => {
    try {
        const response = await axios.get(url + `/${cep}/json/`);
        return response.data;
    } catch (e) {
        handleError(e)
        throw new Error();
    }
};

export { BuscarCep };