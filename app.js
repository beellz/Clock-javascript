
function clock() { 

    const fullDate = new Date();
    var hours = fullDate.getHours();
    var mins  = fullDate.getMinutes();
    var sec = fullDate.getSeconds();

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
    
}

setInterval(clock , 100);