var HOUR = 8;
var MINUTE = 15;
var PERIOD = "PM";

if(PERIOD == "AM"){
    if(MINUTE >30){
        console.log("It's almost " + (HOUR + 1) + " in the morning");
    }
    else{
        console.log("It's just after " + HOUR + " in the morning");
    }
}

if(PERIOD == "PM"){
    if(MINUTE >30){
        console.log("It's almost " + (HOUR + 1) + " in the evening");
    }
    else{
        console.log("It's just after " + HOUR + " in the evening");
    }
}