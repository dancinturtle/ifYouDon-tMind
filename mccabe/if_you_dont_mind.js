function gimmeTheTime(hour, minute, period) {
  var nexthour = hour + 1;
  var remaining_time = 60 - minute;
  var timeOfDay = "";
  var minutes = 0;

  if (period === "PM" & hour === 12 || hour <= 5 ) {
    timeOfDay = "afternoon";
  } else if (period === "PM" & hour > 17) {
    timeOfDay = "evening";
  } else if (period === "AM" & hour%12 < 12) {
    timeOfDay = "morning";
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
    console.log("It's almost " + nexthour%12 + " in the " + timeOfDay);
  } else if (minute < 31 && period === "PM" && minute !== 30 && minute !== 15) {
    console.log("It's just after " + hour + " in the " + timeOfDay);
  } else if (minute > 30 && period === "PM" && minute !== 45) {
    console.log("It's almost " + nexthour%12 + " in the " + timeOfDay);
  } else if (minute === 30) {
    console.log("It's " + minutes + " past " + hour + " " + timeOfDay);
  } else if (minute === 45) {
    console.log("It's a quarter to " + nexthour%12 + " " + timeOfDay);
  } else if (minute === 15) {
    console.log("It's a " + minutes + " past " + hour + " " + timeOfDay);
  }

}

gimmeTheTime(12, 36, "AM");
