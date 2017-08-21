function gimmeTheTime(hour, minute, period) {
  var nexthour = hour + 1;
  var remaining_time = 60 - minute;
  var timeOfDay = "";
  var minutes = 0;

  if (period === "PM") {
    timeOfDay = "evening"
  } else {
    timeOfDay = "morning"
  }

  if (minute === 15) {
    minutes = "quarter";
  } else if (minute === 30) {
    minutes = "half";
  } else {
    minutes = minute;
  }


  if (minute < 31 && period === "AM" && minute !== 30 && minute !== 15) {
    console.log("It's just after " + hour +  " in the " + timeOfDay);
  } else if (minute > 30 && period === "AM" && minute !== 45) {
    console.log("It's almost " + nexthour + " in the " + timeOfDay);
  } else if (minute < 31 && period === "PM" && minute !== 30 && minute !== 15) {
    console.log("It's just after " + hour + " in the " + timeOfDay);
  } else if (minute > 30 && period === "PM" && minute !== 45) {
    console.log("It's almost " + nexthour + " in the " + timeOfDay);
  } else if (minute === 30) {
    console.log("It's " + minutes " past " + hour + " " + period);
  } else if (minute === 45) {
    console.log("It's a quarter to " + nexthour + " " + period);
  } else if (minute === 15) {
    console.log("It's a " + minutes + " past " + hour + " " + period);
  }

}

gimmeTheTime(8, 30, "AM");
