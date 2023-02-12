let track = document.querySelector(`.carousel__slides`);
let slides = Array.from(track.children);
let nextBtn = document.querySelector(`.carousel__btn--right`);
let prevBtn = document.querySelector(`.carousel__btn--left`);
let nav = document.querySelector(`carousel__indicator`);
let slideWidth = slides[0].getBoundingClientRect().width;

// выставляем слайды друг за другом
function setSlidePos(slide, index) {
  slide.style.left = slideWidth * index + `px`;
};
slides.forEach(setSlidePos);


function moveSlide(moveBy) {
  if (moveBy == -1) {
    let activeSlide = document.querySelector(`.active-slide`);
    let activeIndicator = document.querySelector(`.active-indicator`);
    let nextIndicator = activeIndicator.nextElementSibling;
    let nextSlide = activeSlide.nextElementSibling;
    let moveAmount = parseInt(nextSlide.style.left);
    console.log(activeSlide);
    console.log(`${moveBy * moveAmount}`);
    console.log(activeSlide.nextElementSibling);
    activeSlide.classList.remove(`active-slide`);
    nextSlide.classList.add(`active-slide`);
    activeIndicator.classList.remove(`active-indicator`);
    nextIndicator.classList.add(`active-indicator`);
    track.style.transform = `translateX(${moveAmount * moveBy}px)`;
  } else {
    let activeSlide = document.querySelector(`.active-slide`);
    let activeIndicator = document.querySelector(`.active-indicator`);
    let prevIndicator = activeIndicator.previousElementSibling;
    let prevSlide = activeSlide.previousElementSibling;
    let moveAmount = -1 * parseInt(prevSlide.style.left);
    console.log(activeSlide);
    console.log(`${moveBy * moveAmount}`);
    console.log(activeSlide.previousElementSibling);
    activeSlide.classList.remove(`active-slide`);
    prevSlide.classList.add(`active-slide`);
    activeIndicator.classList.remove(`active-indicator`);
    prevIndicator.classList.add(`active-indicator`);
    track.style.transform = `translateX(${moveAmount * moveBy}px)`;
  }
}