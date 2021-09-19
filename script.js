// Upper Header portion current Date and Time display

// set where moment js data will go - variable
var currentDate = moment().format('dddd,MMM do YYYY');
$("#currentDay").html(currentDate);


/* . siblings allows us to target all inout fields with class descriptions
- set all those text values to one variable = less code */

//.ready is a handler - will run function only after DOM is loaded
$(document).ready(function () {
    // Part 1: SAVE function
    $(".saveBtn").on("click", function() {
        // function to pull description values - text
        var dtext = $(this).siblings(".description").val();
    /* .parent.atr("id")= telling comp to get the value of first element under the parent element with the "id"
    - this is the text value of the first div*/
        var time = $(this).parent().attr("id");

    //save text in local storage
    localStorage.setItem(time, dtext);
    })


    /*part 2: get current hour from moment js 
    - create loop over time blocks to check block time to the current time
    -add css class based on time frame ( future/present/past)*/

function timeCheck() {
    //pull current hour from moment js
    var currentHour = moment().hour();

     /* loop over each time block --- . each method used.  1) specifing class "time-block", 2) parsing string ( # AM or PM) from first element under element with class "time-block",
      3) divides string into ordered list. 4)puts into an array and returns the array- index at 1    -- will help for if statment and loop to specifiy test against specific index against moment js data */

     $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        /* To check the assigned time of each block against the currentHour from moment js
        - Conditional statment will be used to specify which of the pre-given css styling will be applied.
        - need a future/pre/past statment
        */ 
        if (blockHour < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

  /* Part 3: Retrieving or "Getting" the save "description" inputs from localStorage
- target specific time block with ID and target the input field by the "class"
- target the value (text) to pull from memory
- repeat localStorage.getItem("hour#") at the end.
  */

  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  //call function by  using varName(); 
  timeCheck();
})