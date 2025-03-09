window.onload = function() {
    function animateCounter(id, finalNumber, duration) {
        const stepTime = 50; // Time between each step in milliseconds
        const steps = duration / stepTime; // Total number of steps
        const increment = finalNumber / steps; // Increment per step
        let currentNumber = 0; // Starting number

        const counterElement = document.getElementById(id);
        const interval = setInterval(() => {
            currentNumber += increment;
            counterElement.textContent = Math.min(Math.round(currentNumber), finalNumber); // Update the number in the HTML

            if (currentNumber >= finalNumber) {
                clearInterval(interval); // Stop the interval when the final number is reached
            }
        }, stepTime);
    }

    // Animate each counter
    animateCounter('piesCounter', 631, 2000); // Pies
    animateCounter('shopsCounter', 228, 2000); // Pie Shops
    animateCounter('flavoursCounter', 118, 2000); // Flavours
};

