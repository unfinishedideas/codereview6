import { Doctor } from './../src/doctor.js';
import { Practice } from './../src/practice.js';

describe('Doctor', () => {
  let newDoctor;
  let practice1;
  let practice2;
  let practice3;
  let practice4;

  let practiceList = [];

  beforeEach(function() {
    practice1 = new Practice("Jimmity MD 1", "123 Fakerion St", "1112223333", true);
    practice2 = new Practice("Jimmity MD 2", "456 Fakest Ave", "99933324444", false);
    // 3 and 4 are the same to test vetPractices()
    practice3 = new Practice("Jimmity MD 3", "123 Fake St", "5551112222", true);
    practice4 = new Practice("Jimmity MD 3", "123 Fake St", "5551112222", true);

    practiceList = [practice1, practice2, practice3, practice4];
    newDoctor = new Doctor("Jimmity","John","Jimson", practiceList);
    newDoctor.vetPractices();
  });

  test('vetPractices() should detect duplicate addresses for practices and remove them', () => {
    expect(newDoctor.practices.length).toEqual(3);
  });

});
