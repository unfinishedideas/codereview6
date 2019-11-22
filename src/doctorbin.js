export class DoctorBin {
  constructor(response){
    this.response = response;
    this.doctorList = [];
  }
  getDoctors(){
    let doctorArray = this.response.data;

    doctorArray.forEach(function(doctor){
      const firstName = doctor.profile.first_name;
      const lastName = doctor.profile.last_name;
      
      const phone = doctor.practices.0.phones.0.number;
      const street = doctor.practices.0.visit_address.street;
      const state = doctor.practices.0.visit_address.state;
      const zip = doctor.practices.0.visit_address.zip;
      const address = street + ", " + state + ", " + zip;
      const acceptingNew = doctor.practices.0.accepts_new_patients;

      const newDoc = new Doctor(firstName, lastName, address, phone, acceptingNew);
      this.doctorList.push(newDoc);
    });
  }
}

export class Doctor {
  constructor(firstName, lastName, address, phone, acceptingNew){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.acceptingNew = acceptingNew;
  }
}
