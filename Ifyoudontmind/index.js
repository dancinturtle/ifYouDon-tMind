var HOUR = 7 ;
var MINUTE = 5;
var PERIOD = "PM";
var message = '';
var message1= ''

	function telltime () {
		// Since the var hour = 8 , and var min= 50, Then the log should print " It's almost 9 in the morning"//
		// if var = am , then it should print morning, if the var Period = PM , it should print "Evening"
		// if it's morning then write in the morning else if its PM write in the evening
		if (PERIOD== "AM"){
			message1= " in the morning";
		}
		else if (PERIOD =="PM") {
			message1= " in the evening";
		}

		if ( MINUTE == 15){
			message= ' quarter after '
		}
		else if ( MINUTE == 30){
			message='half past '
		}
		else if ( MINUTE == 5){
			message=' 5 after '
		}
		else if ( MINUTE >= 50) {
			message = 'almost ';	

           HOUR= HOUR+1
           if (HOUR > 12)
           {
           	HOUR = 1;
           }
		}
		else if (MINUTE<= 15){
			message = 'just after ';
		}


		console.log( "it's"+ message + HOUR + message1)
	}
	telltime();


