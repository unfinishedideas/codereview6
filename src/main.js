import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorService } from './calldoctor.js';
import { DoctorBin } from './doctorbin.js';

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
        const newDoctorBin = new DoctorBin();
        const doctorArray = newDoctorBin.getDoctors(response);
        displayDocs(doctorArray);
      }
      else if ($("#typeOfSearch").val() === "Search By Condition"){
        const response = await newDoctorService.callDoctorByCondition();
        const newDoctorBin = new DoctorBin();
        const doctorArray = newDoctorBin.getDoctors(response);
        displayDocs(doctorArray);
      }
    })();
  });

  // Take the information gathered and display it on the screen
  let displayDocs = (doctorArray) => {
    $("#doctorList").html("");
    let htmlToInject = "";
    let practiceDisplayHtml = "";

    doctorArray.forEach(function(doctor){
      doctor.practices.forEach(function(practice){
        practiceDisplayHtml += `<h4 class="practiceName">${practice.name}</h4><h5>Phone: ${practice.phone}</h5><h5>Address: ${practice.address}</h5>`;
        if (practice.accepting === true){
          practiceDisplayHtml += `<h5>Accepting New Patients? <span class="greenText">Yes</span></h5>`;
        }
        else if (practice.accepting === false){
          practiceDisplayHtml += `<h5>Accepting New Patients? <span class="redText">No</span></h5>`;
        }
      });

      htmlToInject += `<li><div class="drBox"><h3 class="drName">Dr. ${doctor.firstName}, ${doctor.lastName}</h3>` + practiceDisplayHtml + `</div></li>`;
      practiceDisplayHtml = "";
    });
    $("#doctorList").append(htmlToInject);

  };
});
