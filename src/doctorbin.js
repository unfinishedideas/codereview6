import { Doctor } from './doctor.js';
import { Practice } from './practice.js';

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
      if (newDr.practices.length > 1){
        newDr.practices = newDr.vetPractices();
      }
      // newDr.phone = newDr.parsePhone();
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
      const city = practice.visit_address.city;
      const state = practice.visit_address.state;
      const zip = practice.visit_address.zip;
      const website = practice.website;
      console.log(website);
      const address = street1 + ", " + city + ", " + state + ", " + zip;
      const newPractice = new Practice(name, address, phone, accepting, website);
      practiceArray.push(newPractice);
    });
    return practiceArray;
  }
}
