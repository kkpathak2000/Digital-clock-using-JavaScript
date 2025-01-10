// Calling showTime function every second
setInterval(showTime, 1000);

// Defining showTime function
function showTime() 

{
      // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    // Setting time for 12-hour format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hour = 12;
    }

    // Formatting the time values
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
    hour +
    ":" +
    min +
    ":" +
    sec +
    am_pm;

    // Displaying the time
    document.getElementById("clock").innerHTML = currentTime;
}

// Calling the function initially
showTime();