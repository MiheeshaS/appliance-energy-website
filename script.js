// ======================================================
// ENERGYWISE WEBSITE
// JavaScript used by all three webpages
// ======================================================

// ------------------------------------------------------
// PAGE NAVIGATION
// ------------------------------------------------------
// This function receives the name of an HTML page
// and tells the browser to open that page.
function navigateTo(page) {
    window.location.href = page;
}

// ------------------------------------------------------
// TELEVISION ENERGY CALCULATOR
// ------------------------------------------------------
function calculateEnergy() {
    // Get the values entered by the user.
    const power = document.getElementById("power").value;
    const hours = document.getElementById("hours").value;
    // Check whether both fields have been completed.
    if (power === "" || hours === "") {
        alert("Please enter the television power and daily usage.");
        return;
    }
    // Convert the input values into numbers.
    const powerValue = Number(power);
    const hoursValue = Number(hours);
    // Check that the values are valid.
    if (powerValue <= 0 || hoursValue <= 0 || hoursValue > 24) {
        alert("Please enter valid values. Daily usage must be between 0 and 24 hours.");
        return;
    }
    // Calculate daily energy consumption.
    //
    // Formula:
    // Energy (kWh) = Power (W) × Time (hours) / 1000
    const energy = (powerValue * hoursValue) / 1000;
    // Display the result with two decimal places.
    document.getElementById("energyResult").textContent =
        energy.toFixed(2) + " kWh";
    // Change the message underneath the result.
    document.getElementById("resultMessage").textContent =
        "Estimated energy used by this television each day.";
}