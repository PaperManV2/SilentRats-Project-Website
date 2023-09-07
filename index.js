const mainSliderBtns = document.querySelectorAll(".mainSliderBtn");
const images = document.querySelectorAll(".sliderImage");
const test = document.getElementById("upMenu");
let sliderImages = Array.from(images);

let current = 1,
  next = current + 1,
  prev = current - 1;

mainSliderBtns[1].addEventListener("click", () => {
  mainSlideNext(sliderImages);
  move(sliderImages, 0, 8);
  mainSliderBtns[1].style.pointerEvents = "none";
  mainSliderBtns[0].style.pointerEvents = "none";
  setTimeout(() => {
    mainSliderBtns[1].style.pointerEvents = "auto";
    mainSliderBtns[0].style.pointerEvents = "auto";
  }, 500);
});

mainSliderBtns[0].addEventListener("click", () => {
  mainSlidePrev(sliderImages);
  move(sliderImages, 8, 0);
  mainSliderBtns[1].style.pointerEvents = "none";
  mainSliderBtns[0].style.pointerEvents = "none";
  setTimeout(() => {
    mainSliderBtns[1].style.pointerEvents = "auto";
    mainSliderBtns[0].style.pointerEvents = "auto";
  }, 500);
});

function move(array, from, to) {
  var arrayWithoutItem = array.splice(from, 1);
  array.splice(to, 0, arrayWithoutItem[0]);
  return array;
}

// const mainSlideNext = (photos) => {
//   photos[next].style.opacity = "1";
//   photos[prev].style.opacity = "0";
//   photos[current].style.transform = "translateX(-100%)";
//   photos[next].style.transform = "translateX(0)";
//   photos[prev].style.transform = "translateX(100%)";
// };

// const mainSlidePrev = (photos) => {
//   photos[next].style.opacity = "0";
//   photos[prev].style.opacity = "1";
//   photos[current].style.transform = "translateX(100%)";
//   photos[next].style.transform = "translateX(-100%)";
//   photos[prev].style.transform = "translateX(0)";
// };

const mainSlideNext = (photos) => {
  photos[next].style.zIndex = "4";
  photos[next].style.opacity = "1";
  photos[current].style.transform = "translateX(-100%)";
  setTimeout(() => {
    photos[prev].style.opacity = "0";
    photos[prev].style.zIndex = "4";
    photos[prev].style.transform = "translateX(0)";
    photos[current].style.zIndex = "5";
  }, 500);
};

const mainSlidePrev = (photos) => {
  photos[prev].style.zIndex = "4";
  photos[prev].style.opacity = "1";
  photos[current].style.transform = "translateX(100%)";
  setTimeout(() => {
    photos[next].style.opacity = "0";
    photos[next].style.transform = "translateX(0)";
    photos[current].style.zIndex = "5";
  }, 500);
};
