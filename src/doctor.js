export class Doctor {
  constructor(firstName, middleName, lastName, practices){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.practices = practices;
  }
  // Checks for duplicate practices and returns an array without those
  vetPractices(){
    // let finalArray = [];
    // let practicesArray = this.practices;
    //
    // for(let i = 0; i<practicesArray.length; i++){
    //   let previousPractice = practicesArray[i-1];
    //   console.log(previousPractice);
    //   if(practicesArray[i].address !== previousPractice.address){
    //     finalArray.push(practicesArray[i])
    //     previousPractice === practicesArray[i];
    //     i++;
    //   }
    // }
    // console.log("FinalArray", finalArray);
    // return finalArray;
  }
  // still needs to be written
  parsePhone(){
    let newPhone = this.number;
    return newPhone;
  }
}
