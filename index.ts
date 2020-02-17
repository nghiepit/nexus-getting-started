require('dotenv').config();

import path from 'path';
import {makeSchema} from 'nexus';
import {GraphQLServer, Options} from 'graphql-yoga';

import * as types from './schema';

export const schema = makeSchema({
  types,
  shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  outputs: {
    schema: path.join(__dirname, './schema.graphql'),
    typegen: path.join(__dirname, './types.d.ts'),
  },
  prettierConfig: path.join(__dirname.replace(/\/dist$/, ''), './.prettierrc'),
});

const server = new GraphQLServer({
  schema,
});

server.start(
  {
    port: process.env.APP_PORT,
  },
  ({port}: Options) =>
    console.log(`Server is running on http://localhost:${port}`),
);
