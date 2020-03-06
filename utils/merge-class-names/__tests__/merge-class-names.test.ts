import { mergeClassNames } from "../merge-class-names";

test("mergeClassNames: should return class name", () => {
  const classNames = [
    "class",
    "name",
  ];

  const actualResult = mergeClassNames(classNames);
  const expectedResult = "class name";

  expect(actualResult)
    .toBe(expectedResult);
});

test("mergeClassNames: should not render undefined", () => {
  const classNames = [
    "class",
    undefined,
    "name",
  ];

  const actualResult = mergeClassNames(classNames);
  const expectedResult = "class  name";

  expect(actualResult)
    .toBe(expectedResult);
});

test("mergeClassNames: should return empty string if pass is nothing", () => {
  const classNames: string[] = [];

  const actualResult = mergeClassNames(classNames);
  const expectedResult = "";

  expect(actualResult)
    .toBe(expectedResult);
});
