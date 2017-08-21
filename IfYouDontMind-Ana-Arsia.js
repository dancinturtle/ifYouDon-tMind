function ifYouDontMind(HOUR,MINUTE,PERIOD) {
    var str = "It's ";
    if (MINUTE <= 30) {
        str += "just after " + HOUR;
    }
    else {
        str += "almost " + (HOUR + 1);
    }
    if (PERIOD === "AM") {
        str += " in the morning.";
    }
    else {
        str += " in the evening.";
    }
    console.log(str);
    
}