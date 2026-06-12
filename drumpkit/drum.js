document.addEventListener("keydown", (event) => {
   const key = event.key.toLowerCase();
const audio = document.getElementById(key);
 const box = document.querySelector(
        `[data-key="${event.keyCode}"]`
    );
 if (!audio) return;
 audio.currentTime = 0;
    audio.play();
 if (box) {
        box.classList.add("playing");
 setTimeout(() => {
            box.classList.remove("playing");
        }, 150);
    }
});