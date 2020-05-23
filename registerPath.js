/* eslint-disable @typescript-eslint/no-var-requires */

const tsConfigPaths = require('tsconfig-paths');

const {compilerOptions} = require('./tsconfig.json');

const {baseUrl, outDir = './dist', paths = {}} = compilerOptions;

tsConfigPaths.register({
  baseUrl: process.env.NODE_ENV === 'production' ? outDir : baseUrl,
  paths,
});
