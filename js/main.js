let number = 0;
let intervalId = setInterval(incrementNumber, 10000); // 10 seconds interval

function incrementNumber() {
  number++;
  document.getElementById('numberDisplay').innerText = number;
  document.getElementById('progress').style.width = '0%'; // Reset progress bar
  setTimeout(() => {
    document.getElementById('progress').style.width = '100%';
  }, 50); // Small delay to reset and start filling again
}

document.getElementById('upgradeButton').addEventListener('click', () => {
  number += 5; // Increment number by 5 on upgrade
  document.getElementById('numberDisplay').innerText = number;
});

// Optional: Stop interval when user leaves or completes the game
window.addEventListener('beforeunload', () => {
   clearInterval(intervalId);
});