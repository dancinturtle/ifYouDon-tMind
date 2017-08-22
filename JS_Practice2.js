var HOUR = 8, MINUTE = 30, PERIOD = "AM";


if(MINUTE < 30 && PERIOD === "AM")
{
  console.log("It's just after ",HOUR + " in the morning.")
}
else if(MINUTE > 30 && PERIOD === "AM")
{
  console.log("It's almost ",(HOUR+1) + " in the morning.")
}
else if(PERIOD ==="AM")
{
  console.log("It's ",HOUR + ":" + MINUTE + " in the morning.")
}

if(MINUTE < 30 && PERIOD === "PM")
{
  console.log("It's just after ",HOUR + " in the evening.")
}
else if(MINUTE > 30 && PERIOD === "PM")
{
  console.log("It's almost ",(HOUR+1) + " in the evening.")
}
else if(PERIOD ==="PM")
{
  console.log("It's ",HOUR + ":" + MINUTE + " in the evening.")
}