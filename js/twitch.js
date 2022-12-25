function currentTime(Send, NewDate) {

    let date = new Date();

    if (NewDate) {
        date = NewDate
    }

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let session = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    time = hh + ":" + mm + " " + session;
    var displaytime = hh + ":" + mm + ":" + ss + " " + session;


    // document.getElementsByClassName("Clock")[0].innerText = displaytime;
    // document.getElementsByClassName("Date")[0].innerText = date.toDateString();

    // var IdleTime = displaytime.split(":")

    document.getElementById('IdleClock').innerText = hh + ":" + mm + " " + session;
    let t = setTimeout(function () { currentTime() }, (0.5 * 1000));

    if (Send) {
        return time
    } else {

        // doJobs()
    }



}
currentTime();