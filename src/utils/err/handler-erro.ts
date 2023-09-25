import { AxiosError } from "axios";

export const handleError = (erro: any) => {
    if (erro instanceof AxiosError) {
        throw new AxiosError(erro.message, "Erro lib axios, revise o payload, URL, etc.");
    } else if (erro instanceof Error) {
        throw new Error(erro.message);
    }
};