import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './calldoctor.js';
import { Doctor } from './doctor.js';

$(document).ready(function(){
const doctorService;
  $(".formBox").submit(function(event){
    event.preventDefault();
    const userInput = $("searchQuery").val();
    doctorService = new DoctorService(userInput);
    const response = await doctorService.getResponse();
    getElements(response);
  });

  let getElements = (response) => {

  }

});
