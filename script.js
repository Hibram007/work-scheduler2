function CalTime() {
    $(document).ready(function () {
      var momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
      var times = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
        "5 p.m."]



// time block div
var columndivEl = document.querySelector("col-12");

var timeblockcontainer = document.querySelector("time-block-list");


