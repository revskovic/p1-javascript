document.addEventListener("DOMContentLoaded", function () {
    var winkelmandjeInhoud = ["xbox", "Playstation", "pc"];

    var winkelmandjeDiv = document.getElementById("winkelmandje");
    var aantalProductenDiv = document.getElementById("aantalProducten");

    aantalProductenDiv.textContent = "Aantal producten in het mandje: " + winkelmandjeInhoud.length;

    for (var i = 0; i < winkelmandjeInhoud.length; i++) {
        var productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.textContent = winkelmandjeInhoud[i];
        winkelmandjeDiv.appendChild(productDiv);
    }
});
