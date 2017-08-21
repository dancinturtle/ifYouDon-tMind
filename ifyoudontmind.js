function ifYouDontMind(HOUR, MINUTE, PERIOD) {


  var TIMEOFDAY = '';

  if (PERIOD == "AM") {
    TIMEOFDAY = 'morning';
  } else if (PERIOD == "PM") {
    TIMEOFDAY = 'evening';
  } else {
    TIMEOFDAY == 'undefined'
  }

  if (MINUTE > 30)



  {
    console.log("it's almost " + (HOUR + 1) + " in the " + TIMEOFDAY);
  } else if (MINUTE = 30) {
    console.log("it's half past " + (HOUR) + " in the " + TIMEOFDAY);
  } else if (MINUTE = 15) {
    console.log("it's quarter past " + (HOUR) + " in the " + TIMEOFDAY);
  } else if (MINUTE = 45) {
    console.log("it's quarter until " + (HOUR + 1) + " in the " + TIMEOFDAY);

  } else {
    console.log("it's just after " + HOUR + "in the " + TIMEOFDAY);
  }
}
