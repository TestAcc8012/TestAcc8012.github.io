(function ($) {
    // Smooth scrolling animations for sliding sections
    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll(".animate__animated");

        // Set initial opacity and transition for elements
        elements.forEach((el) => {
            el.style.opacity = "0"; // Initially hidden
            el.style.transition = "opacity 1s, transform 1s";
        });

        // Intersection Observer to trigger animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                        entry.target.classList.add("animate__fadeInUp");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
    });

    // Scroll to Section on Button Click
    document.addEventListener("DOMContentLoaded", function () {
        // Learn More Arrow Scroll
        const learnMoreArrow = document.querySelector(".learn-more-arrow");
        const aboutSection = document.getElementById("about");

        if (learnMoreArrow && aboutSection) {
            learnMoreArrow.addEventListener("click", function () {
                aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }

        // Add staggered animations
        const staggeredElements = document.querySelectorAll(".hero-title, .hero-subtitle, .yellow-box, .learn-more-container");

        staggeredElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.5}s`; // Stagger each by 0.5 seconds
        });
    });
})(jQuery);
