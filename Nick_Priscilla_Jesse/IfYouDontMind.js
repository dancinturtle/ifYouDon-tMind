function tellTime(hour, minute, period){
    var minText; //this is final text string where we add all calculations
    
    if(minute <= 30){ 
      minText = "It's just after " + hour; //if minutes < 30 we declare "just after" the current hour
    }
    else if(minute > 30){ 
      hour++;  //if minutes are > 30 - we round up to the next hour and declare "almost"
      if (hour === 13){
        hour = 1; //catching the edge-case of looping 12oclock back to 1
      }
      if(hour === 12){ //Checking to see if the AM/PM needs to be swapped
          if(period === 'AM'){
            period = 'PM';
          } else if (period === 'PM'){
            period = 'AM';
          }
      }
      minText = "It's almost " + hour; //updates minText with results
    }
    if(period == "AM"){ //associating period with relative string
      minText += " in the morning.";
    } else {
      minText += " in the evening.";
    }
    console.log(minText); //printing out final minText value
  }
  
  tellTime(11, 50, 'AM'); //testing function
  tellTime(1, 25, 'PM'); //testing function
  tellTime(11, 50, 'PM'); // testing function