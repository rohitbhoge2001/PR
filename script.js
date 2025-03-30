document.getElementById("love-button").addEventListener("click", function() {
    document.getElementById("love-song").play();
    generateHearts();
});

function generateHearts() {
    const heartContainer = document.getElementById("heart-container");
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
