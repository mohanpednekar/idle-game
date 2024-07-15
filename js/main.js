let number = 0;
let increment = 1
let cycle = 10 // seconds
let intervalId = setInterval(incrementNumber, cycle * 1000);

function incrementNumber() {
  number+=increment;
  document.getElementById('numberDisplay').innerText = number;
  
  let progressWidth = 0;
  let incrementAmount = 10; // Adjust increment amount as needed for smoothness

  let interval = setInterval(() => {
    progressWidth += incrementAmount;
    document.getElementById('progress').style.width = `${progressWidth}%`;

    if (progressWidth >= 100) {
      clearInterval(interval); // Stop the interval once progress reaches 100%
    }
  }, cycle * incrementAmount * 10);
  
  setTimeout(() => {
    document.getElementById('progress').style.width = '0%';
  }, cycle * 1000);
}

document.getElementById('upgradeButton').addEventListener('click', () => {
  increment += 1; // Increase the increment by 1 on upgrade
});

// Optional: Stop interval when user leaves or completes the game
window.addEventListener('beforeunload', () => {
   clearInterval(intervalId);
});
