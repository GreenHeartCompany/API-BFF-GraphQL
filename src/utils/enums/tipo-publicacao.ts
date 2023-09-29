import { registerEnumType } from "type-graphql";

enum TipoPublicacao {
    PLANTACAO = "PLANTACAO",
    LIMPEZA_AGUA = "LIMPEZA_AGUA",
    RECICLAGEM = "RECICLAGEM"
};

registerEnumType(TipoPublicacao, {
    name: "TipoPublicacao",
    description: "Os diferentes tipos conteudo das publicações.",
});

export { TipoPublicacao };