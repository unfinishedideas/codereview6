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
    const city = $("#citySearch").val().toLowerCase();
    const state = $("#stateSearch").val().toLowerCase();
    const locationInput = state + "-" + city;
    (async () => {
      const newDoctorService = new DoctorService(userInput, locationInput);
      const response = await newDoctorService.callDoctor();
      console.log(response);
      // getElements(response);
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
