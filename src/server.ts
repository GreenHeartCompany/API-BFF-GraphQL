import "reflect-metadata";
import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';

dotenv.config();

import { buildSchema } from 'type-graphql';
import { UsuarioResolver } from './resolvers/usuario-resolver';
import createContext from './context/Context';
import { PublicacaoResolver } from './resolvers/publicacao-resolver';

const PORT = 4200;
const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
};

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UsuarioResolver, PublicacaoResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const apolloServer = new ApolloServer({
    schema,
    context: createContext,
  });

  await apolloServer.start();

  app.use(cors(corsOptions));

  apolloServer.applyMiddleware({ app, path: '/' });

  const httpsServer = https.createServer(
    {
      key: fs.readFileSync('C:\\Users\\Mariana Nascimento\\Downloads\\API-BFF-GraphQL\\src\\certs\\private-key.key', 'utf8'),
      cert: fs.readFileSync('C:\\Users\\Mariana Nascimento\\Downloads\\API-BFF-GraphQL\\src\\certs\\certificate.crt', 'utf8'),
    },
    app
  );

  httpsServer.listen(PORT, () => {
    console.log(`🚀 HTTPS Server ready and running on port ${PORT}`);
  });
}

bootstrap();