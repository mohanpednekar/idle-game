let number = 0;
let increment = 1
let intervalId = setInterval(incrementNumber, 5000); // 5 seconds interval

function incrementNumber() {
  number+=increment;
  document.getElementById('numberDisplay').innerText = number;
  document.getElementById('progress').style.width = '0%'; // Reset progress bar
  setTimeout(() => {
    document.getElementById('progress').style.width = '100%';
  }, 50); // Small delay to reset and start filling again
}

document.getElementById('upgradeButton').addEventListener('click', () => {
  increment += 1; // Increase the increment by 1 on upgrade
});

// Optional: Stop interval when user leaves or completes the game
window.addEventListener('beforeunload', () => {
   clearInterval(intervalId);
});
