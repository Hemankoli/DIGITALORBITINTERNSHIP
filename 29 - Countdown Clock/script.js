let countdown;   //A variable to store the reference to the timer’s interval. 
                  //This is used to clear any existing timer when a new one starts.

const timerDisplay = document.querySelector('.display__time-left');    //show the time left in the countdown minutes and seconds 
const endTime = document.querySelector('.display__end-time');    //will display the time when the countdown ends hour and minutes
const buttons = document.querySelectorAll('[data-time]');      //Selects all buttons that have the data-time attribute. used to start the timer

function timer(seconds) {

  clearInterval(countdown);     //This clears any existing interval if a timer is already running.

  const now = Date.now();     //Gets the current timestamp in milliseconds.
  const then = now + seconds * 1000;      //Calculates the future time when the countdown will end by adding the number of seconds (converted to milliseconds) to the current time.
  displayTimeLeft(seconds);       //Calls the displayTimeLeft function to immediately display the countdown
  displayEndTime(then);       //Calls the displayEndTime function to display the exact time when the countdown will finish.

  countdown = setInterval(() => {
    
    const secondsLeft = Math.round((then - Date.now()) / 1000);  //Calculates how many seconds are left by subtracting the current time from the future time (then) and converting it back to seconds.

    // If there are no more seconds left then stop
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // Continuously updates the remaining time
    displayTimeLeft(secondsLeft);
  }, 1000);
}

// This function displays the time left in the countdown.
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);     //Converts the seconds into minutes.
  const remainderSeconds = seconds % 60;      //Gets the remaining seconds after converting to minutes.
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;    // leading zeroes for seconds less than 10 
  document.title = display;     //Updates the document’s title show in tab to the current time left
  timerDisplay.textContent = display;    //Updates the text content of the element displaying the remaining time in the DOM.
}

// This function shows the exact time when the countdown will finish.
function displayEndTime(timestamp) {
  const end = new Date(timestamp);  //Converts milliseconds into a Date object, making it easier to extract hours and minutes.
  const hour = end.getHours();    //Gets the hour from the Date object.
  const adjustedHour = hour > 12 ? hour - 12 : hour;    //12-hour format
  const minutes = end.getMinutes();     //Gets the minutes from the Date object.
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;    //   leading zeroes
}

// This function starts the timer when a button is clicked.
function startTimer() {
  const seconds = parseInt(this.dataset.time);   //Retrieves the time value from the data-time attribute of the clicked button.
  timer(seconds);       //Calls the timer() function, passing in the number of seconds from the button.
} 

buttons.forEach(button => button.addEventListener('click', startTimer));


document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;    //Retrieves the number of minutes entered in the input field
  console.log(mins);
  timer(mins * 60);
  this.reset();
});