export class Practice {
  constructor (name, address, phone, accepting, website) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.accepting = accepting;
    this.website = website;
  }
  parsePhone(){
    let newPhone = this.phone.split("");
    newPhone.splice(0, 0, '(');
    newPhone.splice(4, 0, ') ');
    newPhone.splice(8, 0, '-');
    return newPhone.join('');
  }
}
