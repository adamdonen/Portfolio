// Check if the media query matches desktop and tablet screen sizes
const mediaQuery = window.matchMedia('(min-width: 768px)');

// Function to handle the change in media query
const handleMediaQueryChange = (event) => {
    if (event.matches) {
        // Media query matches (desktop and tablet screen sizes)
        // Execute the JavaScript code here

        $(document).ready(function () {
            const sections = $('.site-content > div');
            let isScrolling = false;
            let scrollDirection = '';

            /**
             * The scrollToSection function is a function that scrolls to the next section when the user scrolls up or down.
             *
             *
             * @param event Prevent the default behavior of the scroll event
             *
             * @return A value of undefined
             *
             * @docauthor Trelent
             */
            function scrollToSection(event) {
                if (isScrolling) return;
                isScrolling = true;

                const currentSection = $('.active');
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

                    currentSection.removeClass('active');
                    nextSection.addClass('active');
                } else {
                    $('html, body').animate({
                        scrollTop: nextSection.offset().top
                    }, 1000);
                    currentSection.removeClass('active');
                    nextSection.addClass('active');
                }

                setTimeout(() => {
                    isScrolling = false;
                }, 1000);

                // Prevent scrolling if it's the last section
            }

            $(document).on('wheel', function (event) {
                scrollDirection = event.originalEvent.deltaY > 0 ? 'down' : 'up';
                scrollToSection(event);
            });

            // Detect active section on page load and scroll to it
            const activeSection = $('.active');
            if (activeSection.length !== 0) {
                $('html, body').animate({
                    scrollTop: activeSection.offset().top
                }, 1000);
            }
        });
    }
};

// Add event listener for media query change
mediaQuery.addEventListener('change', handleMediaQueryChange);

// Initial check for media query condition
handleMediaQueryChange(mediaQuery);
