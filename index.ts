require('dotenv').config();

import path from 'path';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {makeSchema} from 'nexus';

import * as types from './schema';

const app = express();
const __PORT__ = process.env.APP_PORT;

export const schema = makeSchema({
  types,
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  outputs: {
    schema: path.join(__dirname, './schema.graphql'),
    typegen: path.join(__dirname, './types.d.ts'),
  },
  prettierConfig: path.join(__dirname.replace(/\/dist$/, ''), './.prettierrc'),
});

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});
server.applyMiddleware({app, path: '/'});

app.listen({port: __PORT__}, () =>
  console.log(
    `⚡⚡⚡ Server ready at http://localhost:${__PORT__}${server.graphqlPath}`,
  ),
);
