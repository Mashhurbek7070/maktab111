let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-inner img");
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
