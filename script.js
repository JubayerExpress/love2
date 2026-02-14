const noBtn = document.getElementById('no-btn');

// Move button safely inside viewport
if (noBtn) {

    function moveButton() {

        const padding = 20;

        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX = window.innerWidth - buttonWidth - padding;
        const maxY = window.innerHeight - buttonHeight - padding;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }

    noBtn.addEventListener("mouseenter", moveButton);
    noBtn.addEventListener("touchstart", moveButton);
}

// YES REDIRECT
const yesBtn = document.getElementById('yes-btn');

if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        window.location.href = "yes.html";
    });
}

// HUG COUNTER
let hugCount = 0;
const hugBtn = document.getElementById('hug-btn');
const hugCounter = document.getElementById('hug-counter');

if (hugBtn) {
    hugBtn.addEventListener('click', () => {
        hugCount++;
        hugCounter.innerText = "Hugs Given: " + hugCount;
    });
}
