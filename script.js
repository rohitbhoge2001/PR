document.getElementById("surprise-btn").addEventListener("click", function () {
    document.getElementById("love-song").play();
    document.getElementById("gif-container").style.display = "block";
    document.getElementById("love-letter").classList.add("show-letter");
    createHearts();
    createFireworks();
});

function createHearts() {
    const effectsContainer = document.getElementById("effects-container");
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        effectsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

function createFireworks() {
    const effectsContainer = document.getElementById("effects-container");
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 100 + "vh";
        effectsContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1500);
    }
}
