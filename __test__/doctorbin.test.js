import { DoctorBin } from './../src/doctorbin.js';


describe('DoctorBin', () => {
  let newDoctorBin;
  let testJson =
  {
    "data": [
      {
        "practices": [
          {
            "name": "Jimmity Tillerson, MD",,
            "accepts_new_patients": true,
          },
          "visit_address": {
            "city": "Portland",
            "state": "OR",
            "street": "100 SE Street St.",
            "street2": "ste 3008",
            "zip": "99777",
          },
          "phones": [
            {
              "number": "5555555555",
            }
          ],
        ],
        "profile": {
          "first_name": "Jimmity",
          "last_name": "Tillerson",
        }
      }
    ]
  };

  beforeEach(function() {
    newDoctorBin = new DoctorBin(testJson);
    newGame.makeArrays();
  });

  // afterEach(function() {
  // });

  test('getDoctors() should correctly navigate JSON and grab the first name of the doctor', () => {
    expect(newGame.answerArray).toEqual(["T","E","S","T","A","S","A","U","R","U","S"]);
  });

});
