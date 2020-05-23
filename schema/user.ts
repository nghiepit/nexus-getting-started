import {objectType} from '@nexus/schema';

export const User = objectType({
  name: 'User',
  description: 'A User an individual user',
  definition(t) {
    t.implements('Node');
    t.string('name', {description: 'The name of the user'});
  },
});
