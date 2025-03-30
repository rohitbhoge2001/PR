document.addEventListener("DOMContentLoaded", function () {
    const loveButton = document.getElementById("love-button");
    const video = document.getElementById("love-video");
    const audio = document.getElementById("love-song");
    const heartContainer = document.getElementById("heart-container");

    loveButton.addEventListener("click", function () {
        // Show video and start playing
        video.style.display = "block";
        video.play();
        
        // Play audio
        audio.play();
        audio.loop = true;  // Ensure continuous play

        // Generate hearts
        for (let i = 0; i < 20; i++) {
            setTimeout(createHeart, i * 300);
        }
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Random horizontal position (across full width)
        const randomLeft = Math.random() * 100;
        heart.style.left = `${randomLeft}%`;

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove after animation
    }
});
