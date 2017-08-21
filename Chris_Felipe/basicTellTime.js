var hr = 11;
var min = 55;
var per = "AM"

function whatsTheTime(hr,min,per) {

    if(per === "AM") {
        per = " in the Morning";
    }
    else{
        per = " in the Evening";
    }
    if(min > 30) {
        hr++;
        console.log("It's almost " + hr + per)
    }
    if(min < 30) {
        // hr--;
        console.log("Just after " + hr + per)
    }
}
whatsTheTime(12,15,"AM"); 