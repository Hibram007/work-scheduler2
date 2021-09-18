// Upper portion current Date and Time display

// set where moment js data will go - variable
var currentDate = moment().format('dddd,MMM do YYYY');
$("#currentDay").html(currentDate);
