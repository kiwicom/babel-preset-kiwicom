// @flow

export default async function test(a: Object): Object {
  return {
    ...a,
    test_1: a?.b ?? 'default',
    test_2: !!__DEV__,
  };
}
