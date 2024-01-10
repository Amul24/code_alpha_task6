
let clips = document.querySelectorAll(".vid");

clips.forEach(function (clip) {
    clip.addEventListener("mouseover", function (e) {
        clip.currentTime = 0; // Start from the beginning
        clip.play();
        clip.autoplay();
    });

    clip.addEventListener("mouseout", function (e) {
        clip.pause();
        clip.currentTime = 0; // Reset to the beginning
    });
});