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
        audio.play().catch(error => console.log("Autoplay blocked, user must interact"));

        // Start floating hearts
        setInterval(createHeart, 300);
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        
        // Random horizontal start position within the screen width
        heart.style.left = Math.random() * window.innerWidth + "px"; 

        // Random speed for animation
        heart.style.animationDuration = (4 + Math.random() * 3) + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000); 
    }
});
