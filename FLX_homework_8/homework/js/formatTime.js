function formatTime(time) {
    let minutes = 0,
        hours = 0,
        days = 0;
    do {
        if (time >= 60) {
            time -= 60;
            hours++;
        }
        if (hours === 24) {
            hours = 0;
            days++;
        }
    } while (time >= 60);
    minutes = time;
    return (days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)");
}
formatTime(2000);