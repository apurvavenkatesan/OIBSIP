document.getElementById('convertBtn').addEventListener('click', function () {
    const degree = parseFloat(document.getElementById('degree').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;

    let result;

    if (from === 'celsius') {
        if (to === 'celsius') {
            result = degree;
        } else if (to === 'fahrenheit') {
            result = degree * 9 / 5 + 32;
        } else if (to === 'kelvin') {
            result = degree + 273.15;
        }
    } else if (from === 'fahrenheit') {
        if (to === 'celsius') {
            result = (degree - 32) * 5 / 9;
        } else if (to === 'fahrenheit') {
            result = degree;
        } else if (to === 'kelvin') {
            result = (degree - 32) * 5 / 9 + 273.15;
        }
    } else if (from === 'kelvin') {
        if (to === 'celsius') {
            result = degree - 273.15;
        } else if (to === 'fahrenheit') {
            result = (degree - 273.15) * 9 / 5 + 32;
        } else if (to === 'kelvin') {
            result = degree;
        }
    }

    document.getElementById('result').textContent = result.toFixed(2);
});

const clock = document.querySelector("#clock");
// Function to update the clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const amOrPm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Pad single digit minutes with a leading zero
    const time = `${hours}:${minutes} ${amOrPm}`;
    clock.textContent = time;
  }
  
  // Update the clock immediately and then every second
  updateClock(); // Update immediately to avoid initial delay
  setInterval(updateClock, 1000); // Update every second