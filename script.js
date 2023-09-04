function grandOpening() {
    const now = new Date();
    const openDate = new Date("December 22, 2023, 17:00");
    const diff = openDate - now;

    const msInSec = 1000;
    const msInMin = 60000;
    const msInHour = 3600000;
    const msInDay = 86400000;

    const displayDays = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDays;

    const displayHours = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((diff%msInHour)/msInMin);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMin)/msInSec);
    document.querySelector(".seconds").textContent = displaySeconds;

    if (diff <=0 ) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval('countdown');
        weAreOpen();
    }
}

let countdown = setInterval(grandOpening, 1000);

function weAreOpen(){
    const heading = document.querySelector("h1");
    const subheading = document.querySelector("h2");
    subheading.style.display="none";
    heading.textContent="We are finally open!";
    heading.classList.add("open");
}

const button = document.querySelector("#btn");
button.addEventListener("click", function(){
    document.querySelector("#audio").play();
})


