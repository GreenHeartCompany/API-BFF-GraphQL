import { registerEnumType } from "type-graphql";

enum TipoUsuario {
    Voluntario = "VOLUNTARIO",
    Empresa = "EMPRESA"
};

registerEnumType(TipoUsuario, {
    name: "TipoUsuario",
    description: "Os diferentes tipos de usuário para níveis de acesso da aplicação.",
});

export { TipoUsuario };