function convert() {
    let tempValue = document.getElementById("temp-value").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let convertMsg = document.getElementById("msg-convert");

    if (tempValue == "") {
        convertMsg.innerText = `Enter a value to convert`;
    }
    else if (from === "fahrenheit" && to === "celsius") {
        let calc = (tempValue - 32) * (5 / 9);
        convertMsg.innerText = `Converted Temperature: ${calc.toFixed(2)} Celsius`;
    }
    else if (from === "celsius" && to === "fahrenheit") {
        let calc2 = tempValue * (9 / 5) + 32;
        convertMsg.innerText = `Converted Temperature: ${calc2.toFixed(2)} Fahrenheit`;
    } 
    else {
        convertMsg.innerText = `Invalid conversion`;
    }
}

function reset() {
    let fahrenheit = document.getElementById("fah");
    let celsius = document.getElementById("cel");
    document.getElementById("from").value = fahrenheit.value;
    document.getElementById("to").value = celsius.value;
    document.getElementById("temp-value").value = "";
    document.getElementById("msg-convert").innerText = "";
}