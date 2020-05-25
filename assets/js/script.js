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

  for (let time = 9; time < 18; time++) {
    //Offset the index for moe accurate iteration
    let index = time - 9;

    //Create time block rows
    let hourRow = $("<div>");
    $(hourRow).addClass("row timeBlock");
    $(hourRow).attr("id", "hour-" + time);

    //Attach hour rows to the workday container
    $(scheduleContainer).append(hourRow);

    //Create div for editable timeblock area
    let hourTextArea = $("<div>");
    $(hourTextArea).addClass("col description");
    //Add a textarea element on the editable area
    let textBox = $("<textarea>");
    $(textBox).attr("id", "hour-" + time + "-desc");

    //Change textarea background color when in focus fore more user-friendly interface
    $(textBox).on({
      focus: function () {
        $(this).addClass("in-focus");
      },
      focusout: function () {
        $(this).removeClass("in-focus");
      },
    });

    //Attach textarea to the parent div
    hourTextArea.append(textBox);

    //Create the save button
    let saveButton = $("<div>");
    $(saveButton).addClass("col-2 col-md-1 saveBtn");
    $(saveButton).attr("id", "hour-" + time + "-saveBtn");
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

    colorCodeRow(hourTextArea, time);

    function colorCodeRow(hourTextArea, time) {
      if (time < now24Hr) {
        $(hourTextArea).addClass("past");
      } else if (time > now24Hr) {
        $(hourTextArea).addClass("future");
      } else {
        $(hourTextArea).addClass("present");
      }
    }

    //Create click event to save textarea input
    $(saveButton).on("click", function () {
      let textareaData = $(this).siblings(".description").children().val();
      let hourIndex = $(this).parent().attr("id");
      localStorage.setItem(hourIndex, textareaData);
    });

    //Retrieve and display last saved text
    if (localStorage.getItem("hour-" + time) != null) {
      textBox.text(localStorage.getItem("hour-" + time));
    }
  }
});
