document.getElementById("love-button").addEventListener("click", function() {
    let video = document.getElementById("love-video");
    let song = document.getElementById("love-song");

    video.play();  // Start video
    song.play();   // Start audio
    song.loop = true; // Ensure song loops

    createHearts(); // Generate floating hearts
});

// Function to create floating hearts
function createHearts() {
    let heartContainer = document.getElementById("heart-container");

    for (let i = 0; i < 10; i++) { // Generate multiple hearts
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove(); // Remove hearts after animation
        }, 4000);
    }
}
