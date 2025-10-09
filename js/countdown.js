// countdown.js

// Set the target date
const weddingDate = new Date("August 8, 2026 14:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = "It's the big day!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = `${days} days`;
  document.getElementById("hours").textContent = `${hours} hours`;
  document.getElementById("minutes").textContent = `${minutes} minutes`;
  document.getElementById("seconds").textContent = `${seconds} seconds`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately