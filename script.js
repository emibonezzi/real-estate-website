
// PROJECTS SLIDER
const nextBtn = document.querySelector('#next')
const ct = document.querySelector('#ct')
const slidesArray = document.querySelector('.project-container').children
let currentSlide = 0

nextBtn.addEventListener('click', function () {
    if (currentSlide >= slidesArray.length - 1) {
        currentSlide = 0
        slidesArray[currentSlide].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    } else {
        currentSlide = currentSlide + 1;
        slidesArray[currentSlide].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
    console.log(currentSlide)
})