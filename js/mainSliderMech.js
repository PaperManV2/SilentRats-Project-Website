let current = 1,
  next = current + 1,
  prev = current - 1;

export const mainSlideNext = (photos) => {
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

export const mainSlidePrev = (photos) => {
  photos[prev].style.zIndex = "4";
  photos[prev].style.opacity = "1";
  photos[current].style.transform = "translateX(100%)";
  setTimeout(() => {
    photos[next].style.opacity = "0";
    photos[next].style.transform = "translateX(0)";
    photos[current].style.zIndex = "5";
  }, 500);
};
