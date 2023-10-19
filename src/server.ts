import "reflect-metadata";
import * as dotenv from 'dotenv';
dotenv.config();

import path from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UsuarioResolver } from "./resolvers/usuario-resolver";
import { ViaCepResolver } from "./resolvers/viacep-resolver";
import { VoluntarioResolver } from "./resolvers/voluntario-resolver";
import createContext from "./context/Context";
import { PublicacaoResolver } from "./resolvers/publicacao-resolver";
import cors from 'cors';

const PORT = 4200;
const PATH = "/api-bff-graphql";

const express = require('express');

const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,
};

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            UsuarioResolver,
            ViaCepResolver,
            VoluntarioResolver,
            PublicacaoResolver
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    const server = new ApolloServer({
        schema,
        context: createContext
    });

    app.use(cors(corsOptions));

    const { url } = await server.listen(PORT);

    console.log({
        message: `🚀 HTTP Server ready and running in ${url}`,
    });
}

bootstrap();