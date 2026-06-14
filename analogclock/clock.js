const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondRotation = (seconds * 6) - 90;
    const minuteRotation = (minutes * 6) + (seconds * 0.1) - 90;
    const hourRotation = (hours * 30) + (minutes * 0.5) - 90;

    secondHand.style.transform = `rotate(${secondRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
}

updateClock();
setInterval(updateClock, 1000);