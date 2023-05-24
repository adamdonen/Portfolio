const mediaQueryA = window.matchMedia('(min-width: 500px)');

const handleMediaQueryChange = (event) => {
    if (event.matches) {
        $(document).ready(function () {
            const sections = $('.site-content > div');
            let isScrolling = false;
            let scrollDirection = '';

            // Function to scroll to the next section
            function scrollToSection(event) {
                if (isScrolling) return;
                isScrolling = true;

                const currentSection = $('.active-div');
                let nextSection;

                if (scrollDirection === 'down') {
                    nextSection = currentSection.next('.site-content > div');
                } else if (scrollDirection === 'up') {
                    nextSection = currentSection.prev('.site-content > div');
                }

                // Check if the next section is the last section (contact div)
                const isLastSection = nextSection.is(':last-child');

                if (!isLastSection && nextSection.length !== 0) {
                    $('html, body').animate({
                        scrollTop: nextSection.offset().top
                    }, 1000);
                } else {
                    $('html, body').animate({
                        scrollTop: nextSection.offset().top
                    }, 1000);
                }

                currentSection.removeClass('active-div');
                nextSection.addClass('active-div');

                setTimeout(() => {
                    isScrolling = false;
                }, 1000);

                event.preventDefault();
            }

            // Event listener for scroll events
            $(document).on('wheel', function (event) {
                scrollDirection = event.originalEvent.deltaY > 0 ? 'down' : 'up';
                scrollToSection(event);
            });

            // Event listener for touch screen scrolling
            let touchStartY = 0;
            let touchEndY = 0;

            document.addEventListener('touchstart', function (event) {
                touchStartY = event.touches[0].clientY;
            });

            document.addEventListener('touchend', function (event) {
                touchEndY = event.changedTouches[0].clientY;
                handleTouchScroll();
            });

            function handleTouchScroll() {
                const touchDiff = touchEndY - touchStartY;
                scrollDirection = touchDiff > 0 ? 'down' : 'up';
                scrollToSection(event);
            }

            // Event listener for link clicks in the header
            $('.header nav a').on('click', function (event) {
                event.preventDefault();

                const targetId = $(this).attr('href');
                const targetDiv = $(targetId);

                $('html, body').animate({
                    scrollTop: targetDiv.offset().top
                }, 1000);

                sections.removeClass('active-div');
                targetDiv.addClass('active-div');
            });

            // Detect active section on page load and scroll to it
            const activeSection = $('.active-div');
            if (activeSection.length !== 0) {
                $('html, body').animate({
                    scrollTop: activeSection.offset().top
                }, 1000);
            }
        });
    }
};

mediaQueryA.addEventListener('change', handleMediaQueryChange);
handleMediaQueryChange(mediaQueryA);