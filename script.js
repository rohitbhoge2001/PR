document.getElementById("love-button").addEventListener("click", function() {
    let video = document.getElementById("romantic-video");
    let audio = document.getElementById("love-song");
    
    video.style.display = "block";  // Show the video
    video.play();  // Start video playback
    audio.play();  // Start music playback
});
