var currentDate = new Date();

// date names
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekdayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// date
var year = currentDate.getFullYear();
var month = monthName[currentDate.getMonth()];
var weekday = weekdayName[currentDate.getDay()];
var day = currentDate.getDate();

// print
var announceDate =  "Today is " + weekday + ", " + month + " " + day + ", " + year + ".";
  // <br/> Current time is " + hours + ":" + mins + ":" + secs + ".";
document.getElementById("date").innerHTML = announceDate.toString();