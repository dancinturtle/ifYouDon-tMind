function ifYouDontMind(HOUR,MINUTE,PERIOD) {
    var str = "It's ";
    if (MINUTE <= 30) {
        str += "just after " + HOUR;
    }
    else {
        if (HOUR === 12){
            str += "almost " + 1;
        }
        else{
            str += "almost " + (HOUR + 1);
        }
    }
    if (PERIOD === "AM") {
        if (HOUR === 11) {
            if(MINUTE > 30) {
                str += " in the evening.";
            } 
            else{
                str += " in the morning.";
            }
        }
        else {
            str += " in the morning.";
        }
    }
    else {
        if (HOUR === 11) {
            if(MINUTE > 30) {
                str += " in the morning.";
            }
            else{
                str += " in the evening.";
            }
        }
        else {
            str += " in the evening.";
        }
    }
    console.log(str);
    
}

ifYouDontMind(11, 45, "PM")