import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './calldoctor.js';
import { Doctor } from './doctor.js';

$(document).ready(function(){

  $(".formBox").submit(function(event){
    event.preventDefault();
    const userInput = $("#searchQuery").val();
    (async () => {
      let newDoctorService = new DoctorService(userInput);
      const response = await newDoctorService.callDoctor();
      // getElements(response);
      console.log(response);
    })();
  });

  // let getElements = (response) => {
  //   let
  // }
  //
  // let updateDisplay = () => {
  //
  // }

});
