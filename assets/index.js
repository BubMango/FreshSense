// SCROLL
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll when clicking the "Learn More" button
    const learnMoreBtn = document.querySelector(".cta-btn");
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector("#features");
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});


// CARTOON STYLE 
const revealElements = document.querySelectorAll(
    ".feature-card, .info-card, .hero-text, .hero-img, #visual-section img, #cta-section, #info-section"
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        // When element is 80% visible
        if (elementTop < windowHeight * 0.85) {
            el.classList.add("revealed");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// FLOAT
const floatyItems = document.querySelectorAll(".hero-img img, #visual-section img");

floatyItems.forEach((item) => {
    item.style.animation = "floaty 4s ease-in-out infinite";
});
