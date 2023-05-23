// JavaScript code for header animation
window.addEventListener('scroll', function() {
    const header = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
    
});

