document.getElementById("love-button").addEventListener("click", function () {
    let video = document.getElementById("love-video");
    let audio = document.getElementById("love-song");
    let videoContainer = document.getElementById("video-container");

    // Show the video and play it
    videoContainer.style.display = "block";
    video.play();

    // Play the audio
    audio.play();
    audio.loop = true;

    // Start floating hearts
    createHearts();
});

function createHearts() {
    let heartContainer = document.getElementById("heart-container");
    
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px"; // Random horizontal position
        heart.style.animationDuration = 4 + Math.random() * 3 + "s"; // Vary speed

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 300);
}
