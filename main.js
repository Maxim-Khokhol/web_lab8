document.addEventListener("DOMContentLoaded", () => {
    firstSection()
})


function firstSection() {
    const title = document.querySelector(".first-section-content__text");
    const firstButton = document.querySelector(".first-section-content__btn");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                title.style.transform = "translateX(0)";
                title.style.opacity = "1";
                firstButton.style.transform = "translateX(0)";
                firstButton.style.opacity = "1";
            }
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    observer.observe(title);
    observer.observe(firstButton);
}
