function telltime(HOUR, MINUTE, PERIOD){
    var time = "It's";
    if (MINUTE === 5){
        time += " 5 after";
    } else if (MINUTE === 15){
        time += " a quarter after";
    } else if (MINUTE === 30){
        time += " half past";
    } else if (MINUTE > 0 && MINUTE < 30){
        time += " just after";
    } else if (MINUTE > 30){
        time += " almost";
    }
    if (HOUR <= 11 && MINUTE <= 30){
        time += " "+ HOUR;
    } else if (HOUR <= 10 && MINUTE > 30){
        time += " "+ (HOUR+1);
    } else if (HOUR === 12 && MINUTE > 30){
        time += " 1";
        if (PERIOD === "AM"){
            time += " in the morning.";
        } else {
            time += " in the afternoon.";
        }
    }
    if (HOUR === 12 && MINUTE <=30){
        if (PERIOD === "AM"){
            time += " midnight.";
        } else {
            time += " noon.";
        }
    } else if (HOUR === 11 && MINUTE > 30){
        if (PERIOD === "AM"){
            time += " noon.";
        } else {
            time += " midnight.";
        }
    } else if (PERIOD === "PM"){
        if (HOUR < 6){
            time += " in the afternoon.";
        } else if (HOUR < 9){
            time += " in the evening.";
        } else if (HOUR < 12){
            time += " at night.";
        }
    } else if (HOUR < 12){
        time += " in the morning.";
    }
    console.log(time);
}