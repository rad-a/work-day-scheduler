// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//TODO
//2. Variable for timeblocks
//3. Create timeblocks
//3a. Assign each timeblock a moment()
//3b. Append timeblocks to container div

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//TODO
//4. Variables for current timeblock state
//4a. Designate color for timeblock < current time
//4b. Color for timeblock = current time
//4c. Color for timeblock > current time
// WHEN I click into a timeblock
// THEN I can enter an event
//TODO
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

//current Date + Time

//Functions

$(document).ready(function () {
  //Declare DOM Variables
  let currentDay = document.getElementById("current-day");
  let scheduleContainer = document.getElementById("schedule-container");
  let timeSlot = [...document.querySelectorAll("row")];

  //Set current day in the Day, Month, Date, Year format
  let today = moment().format("dddd, MMMM DD, YYYY");
  $(currentDay).text(today);

//NOT SURE I NEED THIS
  let nowHour24 = moment().format('H');
  console.log(nowHour24);
  let nowHour12 = moment().format('h');
  console.log(nowHour12);

  //Start and end of day
let startWorkDay = 9; // 9AM
let endWorkDay = 17; // 5PM

  for (let time = 9; time < 18; time++) {

    
    

    //Create time block rows
    let hourRow = $("<div>");
    $(hourRow).addClass("row timeBlock");

    $(scheduleContainer).append(hourRow);

    //Create div for editable timeblock area
    let hourTextArea = $("<div>");
    $(hourTextArea).addClass("col");
//Add a textarea element on the editable area
    let hourDesc = $("<textarea>");
    hourTextArea.append(hourDesc);

    //Create the save button
    let saveButton = $("<div>");
    $(saveButton).addClass("col-2 col-md-1 saveBtn");
    $(saveButton).html('<i class="fas fa-2x fa-save"></i>');

    //Create 
    let hourInfo = ($("<div>").classList =
    "hour col-2 col-md-1");

    // $(hourInfo).text([i].value);
    // console.log(hour[i]);

    hourRow.append(hourTextArea, saveButton);

  

    // let  = document.createTextNode([i]);

    // timeBlockArea.insertBefore(hourBlock, timeBlockArea.childNodes[2]);
    // // console.log(childToAppend);
    // // timeSlot.appendChild(childToAppend);
    // console.log(timeBlockArea[1]);
  }
});
/*
timeblocks.forEach(appendBlock);

function appendBlock() {
    
  $(timeBlockArea).append('<div class="timeblock"></div>')
 console.log(timeBlockArea)

};
   
})
/*

timeSlot.forEach(console.log("time: " + now.hour()));

while (now.hour()) {
    $(timeSlot).addClass("present");
}
*/
