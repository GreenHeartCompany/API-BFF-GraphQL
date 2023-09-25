import "reflect-metadata";

import path from "node:path";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UsuarioResolver } from "./resolvers/usuario-resolver";

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [
            UsuarioResolver
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql")
    })
    const server = new ApolloServer({
        schema
    });

    const { url } = await server.listen();

    console.log(`🚀 Server ready at ${url}`);
}

bootstrap();
