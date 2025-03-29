document.getElementById("love-button").addEventListener("click", function () {
    let gifContainer = document.getElementById("gif-container");
    let loveSong = document.getElementById("love-song");

    gifContainer.style.display = "block"; // Show GIF
    loveSong.play(); // Play music

    createHearts(); // Trigger heart animation
});

function createHearts() {
    const heartContainer = document.createElement("div");
    heartContainer.classList.add("hearts");
    document.body.appendChild(heartContainer);

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartContainer.appendChild(heart);
    }

    setTimeout(() => heartContainer.remove(), 5000);
}
