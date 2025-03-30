document.addEventListener("DOMContentLoaded", function () {
    const loveButton = document.getElementById("love-button");
    const videoContainer = document.getElementById("video-container");
    const video = document.getElementById("love-video");
    const audio = document.getElementById("love-song");
    const heartContainer = document.getElementById("heart-container");

    loveButton.addEventListener("click", function () {
        // Show video container and play video
        videoContainer.style.display = "block";
        video.play();

        // Play audio
        audio.play().catch(error => console.log("Autoplay blocked, user must interact"));
        audio.loop = true;

        // Start floating hearts
        setInterval(createHeart, 300);
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        
        // Random horizontal start position
        heart.style.left = Math.random() * window.innerWidth + "px"; 

        // Random animation speed
        heart.style.animationDuration = (4 + Math.random() * 3) + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000); 
    }
});
