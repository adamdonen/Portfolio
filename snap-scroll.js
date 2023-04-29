$(document).ready(function() {
    const sections = $('.site-content > div');
    let isScrolling = false;
    let scrollDirection = '';

    function scrollToSection(event) {
        if (isScrolling) return;
        isScrolling = true;

        const currentSection = $('.active');
        let nextSection;

        if (scrollDirection === 'down') {
            nextSection = currentSection.next();
        } else if (scrollDirection === 'up') {
            nextSection = currentSection.prev();
        }

        if (nextSection.length !== 0) {
            $('html, body').animate({
                scrollTop: nextSection.offset().top
            }, 1000);

            currentSection.removeClass('active');
            nextSection.addClass('active');
        }

        setTimeout(() => {
            isScrolling = false;
        }, 1000);

        event.preventDefault();
    }

    $(document).on('wheel', function(event) {
        scrollDirection = event.originalEvent.deltaY > 0 ? 'down' : 'up';
        scrollToSection(event);
    });
});
