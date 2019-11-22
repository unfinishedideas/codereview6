export class DoctorBin {
  constructor(response){
    this.response = response;
    this.doctorList = [];
  }
  getDoctors(){
    console.log(this.response);
  }
}






// Old version
//     let doctorArray = this.response.data;
//     let practiceArray = [];
//
//
//     doctorArray.forEach(function(doctor){
//       const firstName = doctor.profile.first_name;
//       const lastName = doctor.profile.last_name;
//       doctor.getPractices(doctor);
//       let newDoc = new Doctor(firstName, lastName, practiceArray);
//       this.doctorList.push(newDoc);
//     });
//   }
//   getPractices(doctor){
//     // Get Info for Each Practice
//     doctor.practices.forEach(function(practice){
//       const name = practice.name;
//       const phone = practice.number;
//       const street1 = practice.visit_address.street;
//       const street2 = practice.visit_address.street2;
//       const state = practice.visit_address.state;
//       const zip = practice.visit_address.zip;
//
//       const address = street1 + ", " + street2 + ", " + state + ", " + zip;
//       const accepting = practice.accepts_new_patients;
//       const newPractice = new Practice(name, address, phone, accepting);
//     });
//   }
// }
//
//
// export class Doctor {
//   constructor(firstName, lastName, practices){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.practices = practices;
//   }
// }
//
// class Practice {
//   constructor (name, address, phone, accepting) {
//     this.name = name;
//     this.address = address;
//     this.phone = phone;
//     this.accepting = accepting;
//   }
// }
