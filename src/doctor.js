export class Doctor {
  constructor(firstName, middleName, lastName, practices){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.practices = practices;
  }
  // Checks for duplicate practices and returns an array without those
  vetPractices(){
    let finalArray = [];
    let practicesArray = this.practices;
    let previousPractice = practicesArray[0];
    finalArray.push(previousPractice);

    for(let i = 1; i < practicesArray.length; i++){
      if(practicesArray[i].address !== previousPractice.address){
        finalArray.push(practicesArray[i])
        previousPractice = practicesArray[i];
      }
    }
    // console.log("FinalArray", finalArray);
    this.practices = finalArray;
    return finalArray;
  }
  // still needs to be written
  parsePhone(){
    let newPhone = this.number;
    return newPhone;
  }
}
