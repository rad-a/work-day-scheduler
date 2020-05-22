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


//Declare DOM Variables
let currentDay = document.getElementById('currentDay');
let  timeBlockArea = document.querySelector('.container');
//current Date + Time
let now = moment();

//Functions 

$(document).ready(function() {
//Translate currentDay to dayOfWeek, Month Day, Year format
$(currentDay).append(now.format('dddd, MMMM DD, YYYY'));
console.log(now.format('dddd, MMMM DD, YYYY'));

//Create timeblocks
$('.container').append('<div class="time-block"></div>')


});