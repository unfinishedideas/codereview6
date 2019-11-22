export class DoctorBin {
  constructor(response){
    this.response = response;
    this.doctorList = [];
  }
  getDoctors(){
    let doctorArray = this.response.data;
    let practiceArray = [];

    doctorArray.forEach(function(doctor){
      const firstName = doctor.profile.first_name;
      const lastName = doctor.profile.last_name;

      // Get Info for Each Practice
      doctor.practices.forEach(function(practice){
        const phone = practice.number;
        const street1 = practice.visit_address.street;
        const street2 = practice.visit_address.street2;
        const state = practice.visit_address.state;
        const zip = practice.visit_address.zip;

        const address = street1 + ", " + street2 + ", " + state + ", " + zip;
        const accepting = practice.accepts_new_patients;
        const newPractice = new Practice(address, phone, accepting);
      });

      const newDoc = new Doctor(firstName, lastName, practiceArray);
      this.doctorList.push(newDoc);
    });
  }
}

export class Doctor {
  constructor(firstName, lastName, practices){
    this.firstName = firstName;
    this.lastName = lastName;
    this.practices = practices;
  }
}

class Practice {
  constructor (address, phone, accepting) {
    this.address = address;
    this.phone = phone;
    this.accepting = accepting;
  }
}
