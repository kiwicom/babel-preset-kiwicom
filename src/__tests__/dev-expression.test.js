// @flow

import * as babel from '@babel/core';
import { generateTestsFromFixtures } from '@kiwicom/test-utils';

function transform(input) {
  const oldEnv = process.env.NODE_ENV;
  process.env.NODE_ENV = '';

  const transformedCode = babel.transform(input, {
    plugins: [require('../dev-expression')],
  }).code;

  process.env.NODE_ENV = oldEnv;
  return transformedCode;
}

generateTestsFromFixtures(
  `${__dirname}/__fixtures-dev-expression__`,
  transform,
);
