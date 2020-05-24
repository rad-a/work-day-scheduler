
//5. onClick event to turn area into textbox
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//TODO
//6. Add localStorage statement using stringify
//6a. localStorage.yourObject = JSON.stringify(obj); ...to store object
// WHEN I refresh the page
// THEN the saved events persist
//TODO
//7. Write a JSON.parse statement to retrieve object upon load
//7a. obj = JSON.parse(localStorage.yourObject || "{}");

//Functions

$(document).ready(function () {
  //Declare DOM Variables
  let currentDay = document.getElementById("current-day");
  let scheduleContainer = document.getElementById("schedule-container");
  let timeSlot = [...document.querySelectorAll("row")];

  //Set current day in the Day, Month, Date, Year format
  let today = moment().format("dddd, MMMM DD, YYYY");
  $(currentDay).text(today);

  //Define hour formats
  let now24Hr = moment().format("H");
  let now12Hr = moment().format("h");

  //Define start and end of day
//   let startWorkDay = 9; // 9AM
//   let endWorkDay = 17; // 5PM

  for (let time = 9; time < 18; time++) {
    //Offset the index for moe accurate iteration
    let index = time - 9;

    //Create time block rows
    let hourRow = $("<div>");
    $(hourRow).addClass("row timeBlock");
    $(hourRow).attr("id", "hour-" + time);

    $(scheduleContainer).append(hourRow);

    //Create div for editable timeblock area
    let hourTextArea = $("<div>");
    $(hourTextArea).addClass("col description");
    //Add a textarea element on the editable area
    let hourDesc = $("<textarea>");

    hourTextArea.append(hourDesc);

    //Create the save button
    let saveButton = $("<div>");
    $(saveButton).addClass("col-2 col-md-1 saveBtn");
    $(saveButton).html('<i class="fas fa-2x fa-save"></i>');

    //Create hour display element
    let hourDisplay = $("<div>");
    $(hourDisplay).addClass("hour col-2 col-md-1");

    //Create hour display format condition
    let hourInfo = 0;
    let amPm = "";

    if (time > 12) {
      hourInfo = time - 12;
      amPm = "PM";
    } else {
      hourInfo = time;
      amPm = "AM";
    }

    //Populate hourDisplay with hourInfo
    hourDisplay.text(hourInfo + amPm);

    //Add time display, text area, and save button to each hour block
    hourRow.append(hourDisplay, hourTextArea, saveButton);

    console.log(now12Hr, now24Hr, hourInfo, time);

    colorCodeRow(hourTextArea, time);

    function colorCodeRow(hourTextArea, time) {
      if (time < now24Hr) {
        $(hourTextArea).addClass("past");
        console.log("past");
      } else if (time > now24Hr) {
        $(hourTextArea).addClass("future");
        console.log("futureTwo");
      } else {
        $(hourTextArea).addClass("present");
        console.log("presentTwo");
      }
    }

    //Save entered text when "save" icon is clicked

//Create click event to save textarea input
    $(saveButton).on('click', function (event) {
      event.preventDefault();
      let textareaInput = JSON.stringify($(this).siblings(hourDesc).val());
      let parentTimeBlock = JSON.stringify($(this).parent().attr('id'));
      localStorage.setItem(parentTimeBlock, textareaInput);
   
    })
  
  }
});
