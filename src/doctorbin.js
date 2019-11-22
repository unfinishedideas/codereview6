export class DoctorBin {
  constructor(){
    this.doctorList = [];
  }
  getDoctors(response){
    const doctorArray = response.data;
    doctorArray.forEach((doctor) => {
      const firstName = doctor.profile.first_name;
      const middleName = doctor.profile.middle_name;
      const lastName = doctor.profile.last_name;
      const practices = this.getPractices(doctor);
      const newDr = new Doctor(firstName, middleName, lastName, practices);
      this.doctorList.push(newDr);
    });
    console.log("Dr List!!!", this.doctorList);
    return this.doctorList;
  }
  // Get Info for Each Practice
  getPractices(doctor){
    let practiceArray = [];

    doctor.practices.forEach(function(practice){
      const accepting = practice.accepts_new_patients;

      const name = practice.name;
      const phone = practice.phones[0].number;
      const street1 = practice.visit_address.street;
      const street2 = practice.visit_address.street2;
      const city = practice.visit_address.city;
      const state = practice.visit_address.state;
      const zip = practice.visit_address.zip;

      const address = street1 + ", " + street2 + ", " + city + ", " + state + ", " + zip;
      const newPractice = new Practice(name, address, phone, accepting);
      practiceArray.push(newPractice);
    });
    return practiceArray;
  }
}

class Doctor {
  constructor(firstName, middleName, lastName, practices){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.practices = practices;
  }
}

class Practice {
  constructor (name, address, phone, accepting) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.accepting = accepting;
  }
}
