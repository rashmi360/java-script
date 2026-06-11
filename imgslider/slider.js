const images = [
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1017/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1019/600/400"
];

const colors = [
  "red",
  "skyblue",
  " green",
  " yellow"
];

function updateSlide() {
  main.src = images[activeIndex];
  document.body.style.backgroundColor = colors[activeIndex];
}

const main = document.querySelector(".images");
const first = document.querySelector(".first-child");
const last = document.querySelector(".last-child");

let activeIndex = 0;

first.addEventListener("click", () => {
  activeIndex++;
if (activeIndex >= images.length) {
    activeIndex = 0;
  }
updateSlide();
});
last.addEventListener("click", () => {
  activeIndex--;
if (activeIndex < 0) {
    activeIndex = images.length - 1;
  }
updateSlide();
});