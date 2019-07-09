
function clock() { 

    const fullDate = new Date();
    var fullhour = (fullDate.getHours());
    var hours = (fullDate.getHours() % 12 || 12);
    var mins  = fullDate.getMinutes();
    var sec = fullDate.getSeconds();
    var AmPm = (fullhour >= 12) ? "PM" : "AM";

    if ( hours < 10) {
        hours = "0" + hours;
    }

    if ( mins < 10) {
        mins = "0" + mins;
    }
    if ( sec < 10) {
        sec = "0" + sec;
    }
    
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML =":" + mins;
    document.getElementById('sec').innerHTML =":" + sec; 
    document.getElementById('amPm').innerHTML = AmPm;   
  
}

setInterval(clock , 100);