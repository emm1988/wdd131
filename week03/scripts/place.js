function windChillCalculator(tempC, windKmh) {
    // Procede with the formula only if the temperature is 10°C or below and wind speed is above 4.8 km/h
    if (tempC <= 10 && windKmh > 4.8) {
        const windChill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
        return windChill.toFixed(1);
    } else {
        return "N/A";
    }
}


const windChillValue = document.getElementById("wind-chill-value");
if (windChillValue) {
    windChillValue.textContent = windChillCalculator(10, 5) + "°C";
}

