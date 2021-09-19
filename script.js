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
        var time = $(this).parent().atr("id");

    //save text in local storage
    localStorage.setItem(time, dtext);
    })


    /*part 2: get current hour from moment js 
    - create loop over time blocks to check block time to the current time
    -add css class based on time frame ( future/present/past)*/
function timeCheck() {
    //pull current hour from moment js
    var currentHour = moment().hour();

    //loop for time block section

}
