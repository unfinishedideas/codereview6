export class DoctorService {
  constructor (query){
    this.query = query;
  }
  async callDoctor(){
    let response;
    try{
      response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.query}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=ca9a70dfd9207afb8aa012aaca4cc57f`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error){
      console.error("You've caused an error. Error Text: ", error.message);
    }
  }
}
