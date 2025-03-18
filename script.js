document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("access-text");
    const message = "Accesso al terminale in corso...\nCaricamento completato.";
    let index = 0;

    function typeText() {
        if (index < message.length) {
            textElement.textContent += message.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }

    setTimeout(typeText, 1000); // Ritardo iniziale
});
