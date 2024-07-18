let number = 0;
let speed = 1
let acceleration = 0
let cycle = 10 // seconds
let intervalId = setInterval(incrementNumber, cycle * 1000);

function incrementNumber() {
  let progressWidth = 0;
  let incrementAmount = 1; // Adjust increment amount as needed for smoothness

  let interval = setInterval(() => {
    progressWidth += incrementAmount;
    document.getElementById('progress').style.width = `${progressWidth}%`;

    if (progressWidth >= 100) {
      clearInterval(interval); // Stop the interval once progress reaches 100%
    }
  }, cycle * incrementAmount * 10);
  
  setTimeout(() => {
    document.getElementById('progress').style.width = '0%';
    number+=speed;
    document.getElementById('numberDisplay').innerText = number;
  }, cycle * 1000);
}

document.getElementById('upgradeButton').addEventListener('click', () => {
  if(number >= 10){
      number -= 10;
      document.getElementById('numberDisplay').innerText = number;
      speed += acceleration;
  }
  document.getElementById('incrementAmountDisplay').innerText = speed
});

// Optional: Stop interval when user leaves or completes the game
window.addEventListener('beforeunload', () => {
   clearInterval(intervalId);
});

incrementNumber()
