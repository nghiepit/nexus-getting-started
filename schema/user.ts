import {objectType} from 'nexus';

export const User = objectType({
  name: 'User',
  description: 'A User an individual user',
  definition(t) {
    t.implements('Node');
    t.string('name', {description: 'The name of the user'});
  },
});
