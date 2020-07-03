function quizTimer(duration, display) {
    var time = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(time / 60, 10);
        seconds = parseInt(time % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--time < 0) {
            time = duration;
        }
    }, 1000);
}

window.onload = function () {
    var remainingTime = 60 * 25,
        display = document.querySelector('#time');
    quizTimer(remainingTime, display);
};