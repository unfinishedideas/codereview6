import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './calldoctor.js';
import { DoctorBin, Doctor } from './doctorbin.js';

$(document).ready(function(){

  $(".formBox").submit(function(event){
    event.preventDefault();
    const userInput = $("#searchQuery").val();
    const city = $("#citySearch").val().toLowerCase();
    const state = $("#stateSearch").val().toLowerCase();
    const locationInput = state + "-" + city;
    (async () => {
      const newDoctorService = new DoctorService(userInput, locationInput);
      if ($("#typeOfSearch").val() === "Search By Name"){
        const response = await newDoctorService.callDoctorByName();
        const newDoctorBin = new DoctorBin(response);
        newDoctorBin.getDoctors();
        console.log("By Name: ",response);
      }
      else if ($("#typeOfSearch").val() === "Search By Condition"){
        const response = await newDoctorService.callDoctorByCondition();
        console.log("By Condition:",response);
      }
      // getElements(response);
    })();
  });

  let displayDocs = (doctorArray) => {
    $("#doctorList").html("");
    doctorArray.forEach(function(doctor){
      $("#doctorList").append(`<li><h4>${doctor.firstName}, ${doctor.lastName}</h4>`);
      doctor.practicesList.forEach(function(practice){
        $("#doctorList").append(`<h3>Practice Name: ${practice.practiceName}</h3>`);
        $("#doctorList").append(`<h3>Address: ${practice.address}</h3>`);
        $("#doctorList").append(`<h4>Phone: ${practice.phone}</h4>`);
        $("#doctorList").append(`<h4>Accepting New Patients? ${practice.acceptingNew}</h4>`);
      });
      $("#doctorList").append(`</li>`);
    });
  };

});
