function currentTime() {
  let date = new Date(); /* creating object of Date class */
  let hour = date.getHours(); /* using the methods of Date object get "hours", "minutes" and "seconds" */
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  /* adding AM or PM next to time */
  am_pm = "AM";
  
  /* function for the AM,PM */  
  if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
  }

  if (hour == 0) {
      hr = 12;
      am_pm = "AM";
  }

  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + am_pm; /* adding time to the div */
}



function updateTime(t) {
  if (t < 10) {
    return "0" + t;
  }
  else {
    return t;
  }

}

currentTime(); /* calling currentTime() function to initiate the process */
