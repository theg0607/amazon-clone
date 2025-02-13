const slides = document.querySelectorAll(".cimg");
let counter = 0;

const totalSlides = slides.length;

// Position images properly
slides.forEach((cimg, index) => {
    cimg.style.left = `${index * 100}%`;
});

// Function to move to the next image
const Next = () => {
    counter++;
    if (counter >= totalSlides) {
        counter = 0; // Reset to first slide
    }
    slideImg();
};

// Function to move to the previous image
const Prev = () => {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1; // Go to last slide
    }
    slideImg();
};

// Function to apply sliding effect
const slideImg = () => {
    slides.forEach((cimg) => {
        cimg.style.transform = `translateX(-${counter * 100}%)`;
    });
};

