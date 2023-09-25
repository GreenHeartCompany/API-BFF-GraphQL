import "reflect-metadata";
import express from "express";
require('dotenv').config()

import path from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UsuarioResolver } from "./resolvers/usuario-resolver";
import { ViaCepResolver } from "./resolvers/viacep-resolver";

const PORT = 4200
const PATH = "/green-heart/api-bff-graphql"

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [
            UsuarioResolver,
            ViaCepResolver
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql")
    })
    const server = new ApolloServer({
        schema
    });

    const { url } = await server.listen(PORT, );

    console.log({
        message: `🚀 HTTP Server ready and running in ${url}`,
    });
}

bootstrap();
