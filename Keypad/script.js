// script.js
let pin = "";

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key >= '0' && key <= '9') {
            enterPin(key);
        } else if (key === 'Enter') {
            checkPin();
        } else if (key === 'Backspace') {
            backspacePin();
        }1234
    });
});

function enterPin(num) {
    if (pin.length < 4) {
        pin += num;
        document.getElementById("pinDisplay").innerText = pin.replace(/./g, '*');
    }
}

function clearPin() {
    pin = "";
    document.getElementById("pinDisplay").innerText = "";
}

function backspacePin() {
    pin = pin.slice(0, -1);
    document.getElementById("pinDisplay").innerText = pin.replace(/./g, '*');
}

function checkPin() {
    const correctPin = "5851";

    if (pin === correctPin) {
        // alert("Login successful!");
        // document.getElementById('keypad').style.backgroundColor = 'green'; // Change keypad color to green
        document.getElementById("errorMessage").innerText = ""; // Clear any error message
        document.getElementById("errorMessage").innerText = "=D";
        slideOutKeypad();
        setTimeout(function() { // Delay redirection to allow the user to see the color change
            window.location.href = "https://jwilly117.github.io/Incr.Apps/views/CalendarDrag.html"; // Redirect to the desired URL
        }, 1000); // Redirect after 1 second
    } else {
        document.getElementById("errorMessage").innerText = "Incorrect PIN!";
        pin = "";
        document.getElementById("pinDisplay").innerText = "";
    }
}

function slideOutKeypad() {
    const container = document.querySelector('.login-container');
    container.style.transition = 'transform 0.8s ease-in-out';
    container.style.transform = 'translateY(100vh)';
}

