document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navigation');

    // Change style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Additional hover effects are already handled by CSS
});
