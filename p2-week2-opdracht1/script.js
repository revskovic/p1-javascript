document.addEventListener("DOMContentLoaded", function () {
    var bewegendeDiv = document.getElementById("bewegendeDiv");
    var positie = 0;

    function beweegNaarRechts() {
        positie += 5; // Pas dit aan naar wens voor de gewenste snelheid

        // Zorg ervoor dat de beweging stopt als de gewenste positie is bereikt
        if (positie <= window.innerWidth - bewegendeDiv.offsetWidth) {
            bewegendeDiv.style.left = positie + "px";
            requestAnimationFrame(beweegNaarRechts);
        }
    }

    // Start de beweging wanneer de DOM geladen is
    beweegNaarRechts();
});
