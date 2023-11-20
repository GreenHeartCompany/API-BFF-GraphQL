import "reflect-metadata";
import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';

dotenv.config();

import { buildSchema } from "type-graphql";
import { UsuarioResolver } from "./resolvers/usuario-resolver";
import { ViaCepResolver } from "./resolvers/viacep-resolver";
import { VoluntarioResolver } from "./resolvers/voluntario-resolver";
import { PublicacaoResolver } from "./resolvers/publicacao-resolver";
import createContext from "./context/Context";

const PORT = 4200;
const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
};

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UsuarioResolver, PublicacaoResolver, ViaCepResolver, VoluntarioResolver],
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
      key: fs.readFileSync('./src/certs/privkey1.pem', 'utf8'),
      cert: fs.readFileSync('./src/certs/fullchain1.pem', 'utf8'),
    },
    app
  );
	
  httpsServer.listen(PORT, () => {
    console.log(`🚀 HTTPS Server ready and running on port ${PORT}`);
  });
}

bootstrap();
