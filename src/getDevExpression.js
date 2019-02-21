/* eslint-disable flowtype/require-valid-file-annotation */

module.exports = function(types) {
  // process.env.NODE_ENV !== "production"
  return types.binaryExpression(
    '!==',
    types.memberExpression(
      types.memberExpression(
        types.identifier('process'),
        types.identifier('env'),
        false,
      ),
      types.identifier('NODE_ENV'),
      false,
    ),
    types.stringLiteral('production'),
  );
};
