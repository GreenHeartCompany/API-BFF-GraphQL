import axios from "axios";
import { AutenticacaoResponse } from "../dtos/models/Usuario/autenticacao-response-model";
import { AutenticacaoInput } from "../dtos/inputs/Usuario/autenticacao-input";
import { handleError } from "../utils/err/handler-erro";

const autenticarUsuario = async (email: string, senha: string): Promise<AutenticacaoResponse> => {
    const data = {
        email: email,
        senha: senha
    }
    
    try {
        const response = await axios.post("http://localhost:8080/api/usuarios/login", data);
        return response.data;
    } catch (e) {
        handleError(e);
        throw new Error();
    }
};

export { autenticarUsuario };