import { registerEnumType } from "type-graphql";

enum TipoPublicacao {
    PLANTACAO = "Plantação",
    LIMPEZA_AGUA = "Limpaza das águas",
    RECICLAGEM = "Reciclagem"
};

registerEnumType(TipoPublicacao, {
    name: "TipoPublicacao",
    description: "Os diferentes tipos conteudo das publicações.",
});

export { TipoPublicacao };