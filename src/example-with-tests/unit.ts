import { exampleFunction } from ".";

describe(`example-with-tests`, () => {
  it(`multiplies the input by 3`, () => {
    expect(exampleFunction(6)).toEqual(18);
  });
});
