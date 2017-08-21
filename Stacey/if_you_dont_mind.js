var minute = 0;
var hour = 0;
var period = " ";

function the_time(hr, min, per){

  if(min < 30){
    min = "just after";
  }
  else{
    min = "almost";
  }

  if(per == "am"){
    per = "in the morning";
  }
  else{
    per = "in the evening";
  }

    return ("It's" + " " + min + " " + hr + " " + per);
}

console.log(the_time(4, 5, "pm"));
