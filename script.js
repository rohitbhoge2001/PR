document.addEventListener("DOMContentLoaded", function () {
    const loveButton = document.getElementById("love-button");
    const videoContainer = document.getElementById("video-container");
    const video = document.getElementById("love-video");
    const audio = document.getElementById("love-song");
    const heartContainer = document.getElementById("heart-container");

    loveButton.addEventListener("click", function () {
        // Show video container
        videoContainer.style.display = "block";

        // Play video and audio
        video.play();
        audio.play();
        audio.loop = true;

        // Generate hearts
        for (let i = 0; i < 20; i++) {
            setTimeout(createHeart, i * 300);
        }
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Random horizontal position (across full width)
        heart.style.left = `${Math.random() * 100}%`;

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});
