// NO button movement
const noBtn = document.getElementById('no-btn');

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

// YES redirect
const yesBtn = document.getElementById('yes-btn');
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        window.location.href = "yes.html";
    });
}

// HUG COUNTER (yes page)
let hugCount = 0;
const hugBtn = document.getElementById('hug-btn');
const hugCounter = document.getElementById('hug-counter');
if (hugBtn) {
    hugBtn.addEventListener('click', () => {
        hugCount++;
        hugCounter.innerText = "Hugs Given: " + hugCount;
    });
}

// Floating hearts effect
const heartContainer = document.getElementById("heart-container");

document.addEventListener("mousemove", e => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";
    heart.style.background = "url('https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif') no-repeat center/contain";
    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000); // remove after animation
});
