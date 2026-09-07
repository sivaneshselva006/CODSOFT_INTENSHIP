// Add a value to the display
function appendValue(value) {
    document.getElementById("display").value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete the last character
function deleteLast() {
    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}