// const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const card = document.querySelectorAll('.flip-card')
const len = card.length
// Images are from unsplash
let pictures = ["assets/images/raytrace.jpeg", "assets/images/weather.svg", "assets/images/calculator.svg", "assets/images/converter.png", "assets/images/spotify.svg"];
let position = 0;

const moveRight = () => {
    clearCards();
    if (position >= len) {
        position = 0;
        card[position].classList.add('actives');
        return;
    }
    card[position].classList.add('actives');
    position++;
}
const moveLeft = () => {
    clearCards();
    if (position < 1) {
        position = len - 1;
        card[position].classList.add('actives');
        return;
    }
    card[position - 1].classList.add('actives');
    position--;
}

const clearCards = () => {
    for (const c of card) {
        c.classList.remove('actives');
    }
}

const assignPictures = () => {
    for (const c of card) {
        const children = c.querySelectorAll("div.flip-card-front");
        console.log(children);

        children.forEach((child) => {
            switch (true) {
                case child.classList.contains("raytrace"):
                    child.style.backgroundImage = `url(${pictures[0]})`;
                    child.style.backgroundSize = '90% 90%';
                    break;
                case child.classList.contains("weather"):
                    child.style.backgroundImage = `url(${pictures[1]})`;
                    child.style.backgroundSize = '100% 100%';
                    // child.style.backgroundSize = '10% 10%';

                    break;

                case child.classList.contains("calculator"):
                    child.style.backgroundImage = `url(${pictures[2]})`;
                    child.style.backgroundSize = '90% 90%';
                    break;

                case child.classList.contains("converter"):
                    child.style.backgroundImage = `url(${pictures[3]})`;
                    // child.style.backgroundSize = '75% 75%';
                    child.style.aspectRatio = '3/4';
                    break;

                case child.classList.contains("spotify"):
                    child.style.backgroundImage = `url(${pictures[4]})`;
                    child.style.backgroundSize = '90% 90%';

                    break;
                default:
                    break;


            }
            // child.style.backgroundSize = "contain";

            child.style.backgroundPosition = "center";
            child.style.backgroundRepeat = "no-repeat";
        });
    }
};

assignPictures();
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);