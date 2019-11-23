// This is the API Call for BetterDoctor

export class DoctorService {
  constructor (query, location){
    this.query = query;
    this.location = location;
  }
  // Grabbed from here: https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  async callDoctorByName(){
    try{
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.query}&location=${this.location}&skip=0&limit=10&user_key=fuckyou`);
            // response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.query}&location=${this.location}&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) {
      console.error("You've caused an error. Error Text: " + error.message);
      return "HEY";
    }
  }
  // async callDoctorByCondition(){
  //   let response;
  //   try{
  //     response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.query}&location=${this.location}&skip=0&limit=10&user_key=${process.env.API_KEY}`);
  //     const jsonifiedResponse = await response.json();
  //     return jsonifiedResponse;
  //   } catch(error){
  //     console.error("You've caused an error. Error Text: ", error.message);
  //   }
  // }
}
