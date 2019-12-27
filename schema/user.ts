import {objectType} from 'nexus';

export const User = objectType({
  name: 'User',
  description: 'A User an individual user',
  definition(t) {
    t.string('id', {description: 'The id of the user'});
  },
});
