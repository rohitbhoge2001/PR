document.getElementById("surprise-button").addEventListener("click", function() {
    // Play the song
    document.getElementById("love-song").play();

    // Show the GIF
    let gif = document.getElementById("love-gif");
    gif.style.display = "block";

    // Fireworks and hearts animation
    let fireworksContainer = document.querySelector(".fireworks-container");
    for (let i = 0; i < 15; i++) {
        let firework = document.createElement("div");
        firework.className = "firework";
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.animationDuration = Math.random() * 2 + 2 + "s";
        fireworksContainer.appendChild(firework);
    }
});
