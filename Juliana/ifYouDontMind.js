

function time (hr,min,period) {
console.log ("It's");
    if (min <  30) {      
    min = "just after";
    }
    if (min > 30) {
    min= "almost";
    hr= hr+1;
    }
    if (min == 30){
    hr= hr;
    }
    if (period == "AM") {
    period = "in the morning";
    }
    else if (period == "PM") {
    period = "in the evening";
    }
 console.log( "It's" + " " + hr + " " + min + " " + period) }
time(8, 50, "AM");

