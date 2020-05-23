import path from 'path';
import {makeSchema} from '@nexus/schema';

import * as types from './schema';

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, '../schema.graphql'),
    typegen: path.join(__dirname, '../generated/nexus.ts'),
  },
  plugins: [],
});
