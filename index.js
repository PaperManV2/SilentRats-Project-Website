import { mainSlideNext, mainSlidePrev } from "./js/mainSliderMech.js";

const mainSliderBtns = document.querySelectorAll(".mainSliderBtn");
const images = document.querySelectorAll(".sliderImage");
let sliderImages = Array.from(images);

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
