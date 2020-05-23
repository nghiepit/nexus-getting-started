require('dotenv').config();

import express from 'express';
import {ApolloServer} from 'apollo-server-express';

import {schema} from './schema';

const app = express();
const __PORT__ = process.env.PORT || 4000;

const server = new ApolloServer({
  schema,
  context(context): object {
    return {
      ...context,
      __PROD__: process.env.NODE_ENV === 'production',
    };
  },
  introspection: true,
  playground: true,
});

server.applyMiddleware({app, path: '/'});

app.listen({port: __PORT__}, () =>
  // eslint-disable-next-line no-console
  console.log(
    `⚡⚡⚡ Server ready at http://localhost:${__PORT__}${server.graphqlPath}`,
  ),
);
