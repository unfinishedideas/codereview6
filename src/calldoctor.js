// This is the API Call for BetterDoctor
export class DoctorService {
  constructor (query, location){
    this.query = query;
    this.location = location;
  }
  async callDoctorByName(){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.query}&location=${this.location}&skip=0&limit=10&user_key=${process.env.API_KEY}`);
        if (response.ok === false){
          throw new Error(`Code: ${response.status}: ${response.statusText}`);
        }
        else {
          let jsonifiedResponse = await response.json();
          console.log(jsonifiedResponse);
          return jsonifiedResponse;
        }
      } catch (error) {
        console.error("You've caused an error. " + error.message);
        return error;
      }
    }
    async callDoctorByCondition(){
      try {
        let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${this.query}&location=${this.location}&skip=0&limit=10&user_key=${process.env.API_KEY}`);
          if (response.ok === false){
            throw new Error(`Code: ${response.status}: ${response.statusText}`);
          }
          else {
            let jsonifiedResponse = await response.json();
            console.log(jsonifiedResponse);
            return jsonifiedResponse;
          }
        } catch (error) {
          console.error("You've caused an error. " + error.message);
          return error;
        }
      }
    }

    // Found code sample to throw errors here: https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
