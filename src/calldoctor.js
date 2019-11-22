export class DoctorService {
  constructor (query, location){
    this.query = query;
    this.location = location;
  }
  async callDoctorByName(){
    let response;
    try{
      response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.query}&location=${this.location}&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      console.log(response);
      const jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error){
      console.error("You've caused an error. Error Text: ", error.message);
    }
  }
  async callDoctorByCondition(){
    let response;
    try{
      response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.query}&location=${this.location}&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      console.log(response);
      const jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error){
      console.error("You've caused an error. Error Text: ", error.message);
    }
  }
}
