function ifYouDontMind(HOUR,MINUTE,PERIOD){
  var HOUR = 8;
  var MINUTE = 50;
  var PERIOD = "AM";

  var TIMEOFDAY = '';

   if(PERIOD == "AM"){
     TIMEOFDAY = 'morning';
   }
   else {
     TIMEOFDAY = 'evening';
   }

  if (MINUTE > 30){
    console.log("it's almost " + (HOUR + 1) + " in the " + TIMEOFDAY);
  }
  else {
    console.log("it's just after " + HOUR+ "in the " + TIMEOFDAY);
  }
}
