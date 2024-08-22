document.addEventListener('DOMContentLoaded', function () {
    const features = document.querySelectorAll('.feature');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    features.forEach(feature => {
        observer.observe(feature);
    });
});


AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once - while scrolling down
    easing: 'ease-out-back', // Animation easing
});


//BOTON SCROLL

window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Función para volver arriba al hacer clic
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
