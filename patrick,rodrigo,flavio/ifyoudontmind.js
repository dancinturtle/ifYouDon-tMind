// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";

// var str = "It's";

// if(MINUTE > 30){
//     var str = str + " almost " + (HOUR+1);
// }else{
//     var str = str + " just after " + HOUR;
// }

// if(PERIOD=="AM"){
//     var str = str + " in the morning.";
// }else{
//     var str = str + " in the evening.";
// }

// console.log(str);

//BONUS SECTION//

// var hour = 5;
// var min = 37;
// var period = "PM";

var str = "It's ";

function time(hour, min, period) {
    var period = period.toUpperCase();
    if (min === 15) {
        str = str + "a quarter after " + hour;
    } else if (min === 30) {
        str = str + "a half past " + hour;
    } else if (min === 45) {
        str = str + "a quarter till " + (hour + 1);
    } else if (min < 60) {
        str = str + hour + ":" + min;
    } else {
        str = str + hour + " o'clock";
    }
    if (period == "AM" && hour >= 7 && hour <= 11) {
        str = str + " in the morning.";
    } else if (period == "AM" && hour < 7 && hour >= 1) {
        str = str + " in the early morning.";
    } else if (period == "AM" && hour == 12) {
        str = str + " midnight";
    } else if (period == "PM" && hour >= 1 && hour <= 5) {
        str = str + " in the afternoon";
    } else if (period == "PM" && hour > 5 && hour <= 8) {
        str = str + " in the evening";
    } else if (period == "PM" && hour == 12) {ß
        str = str + " noon";
    } else {
        str = str + " at night";
    }
    console.log(str);
}
time(11, 59, "pm")