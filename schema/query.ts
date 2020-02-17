import {queryType} from 'nexus';

export const Query = queryType({
  definition(t) {
    t.field('author', {
      type: 'JSON',
      resolve(_, args, ctx) {
        if (ctx.__PROD__) {
          return require('../../package.json').author;
        }

        return require('../package.json').author;
      },
    });

    t.field('user', {
      type: 'User',
      resolve() {
        return {
          id: '1',
          name: 'Nghiep',
        };
      },
    });
  },
});
