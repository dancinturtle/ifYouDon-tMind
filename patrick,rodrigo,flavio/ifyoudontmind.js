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

var hour = 5;
var min = 37;
var period = "PM";

var str = "It's ";

if(0 < min && min <= 10){
    var str = str + hour +":"+ min;
}else if(10 < min && min <= 20 && min !== 15){
    var str = str + hour +":"+ min;
}else if(20 < min && min < 30){
    var str = str + hour +":"+ min;
}else if(30 < min && min < 40){
    var str = str + hour + ":"+ min;
}else if(40 < min && min < 50 && min !== 45){
    var str = str + hour + ":" + min;
}else if(50 < min && min < 60){
    var str = str + hour + ":" + min;
}else if(min === 15){
    var str = str + "a quarter after " + hour;
}else if(min === 30){
    var str = str + "a half past " + hour;
}else if(min === 45){
    var str = str + "a quarter till " + (hour+1);
}else{
    var str = str + hour + " o'clock";
}

if(period=="AM" && hour >= 7 && hour <= 11){
    var str = str + " in the morning.";
}else if(period=="AM" && hour < 7 && hour >= 1){
    var str = str + " in the early morning.";
}else if(period=="AM" && hour == 12){
    var str = str + " midnight";
}else if(period=="PM" && hour >= 1 && hour <= 5){
    var str = str + " in the afternoon";
}else if(period=="PM" && hour > 5 && hour <= 8){
    var str = str + " in the evening";
}else if(period=="PM" && hour==12){
    var str = str + " noon";
}else{
  var str = str + " at night";
}

console.log(str);