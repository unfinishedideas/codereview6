import { Practice } from './../src/practice.js';

describe('Practice', () => {
  let practice;

  beforeEach(function() {
    practice = new Practice("Jimmity MD 1", "123 Fakerion St", "1112223333", true);
  });

  test(`parsePhone() should take a practice's phone number and return it as a string in this form: (###) ###-####`, () => {
    expect(practice.parsePhone()).toEqual("(111) 222-3333");
  });
});
