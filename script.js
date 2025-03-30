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

        // Create floating hearts
        for (let i = 0; i < 15; i++) {
            setTimeout(createHeart, i * 200);
        }
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = "50%";  // Appear from center
        heart.style.transform = "translateX(-50%)";  // Adjust center alignment
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000); // Remove after animation
    }
});
