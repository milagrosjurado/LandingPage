function toggleFAQ(button) {
    const p = button.nextElementSibling;
    p.style.display = (p.style.display === "block") ? "none" : "block";
}

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const countdownElement = document.getElementById("countdown-timer");

    if (distance < 0) {
        clearInterval(countdownFunction);
        countdownElement.innerHTML = "🎉 ¡Evento en curso!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = ` ⏳ ${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);