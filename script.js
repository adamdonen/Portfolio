const projectList = document.getElementById("project-list");

let scrollPos = 0;
let ticking = false;

function doSomething(scrollPos) {
    // do something with scroll position
}

projectList.addEventListener("scroll", function(e) {
    scrollPos = e.target.scrollTop;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(scrollPos);
            ticking = false;
        });
        ticking = true;
    }
});