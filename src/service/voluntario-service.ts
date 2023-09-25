import axios from "axios";
import { VoluntarioInput } from "../dtos/inputs/Voluntario/voluntario-input";

const CadastrarVoluntario = (data: VoluntarioInput) => {
    return axios.post("http://localhost:8080/api/voluntarios/cadastrar", data);
};

export { CadastrarVoluntario };