// NO BUTTON MOVES BUT STAYS VISIBLE
const noBtn = document.getElementById('no-btn');
const container = document.querySelector('.container');

if (noBtn) {
    function moveButton() {

        const containerRect = container.getBoundingClientRect();
        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX = containerRect.width - buttonWidth - 20;
        const maxY = containerRect.height - buttonHeight - 20;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }

    noBtn.addEventListener("mouseenter", moveButton);
    noBtn.addEventListener("touchstart", moveButton);
}


// YES BUTTON REDIRECT
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
