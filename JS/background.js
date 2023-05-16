// Initializing the canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'abcdefghijklmnopqrtsuvwxyz1234567890!@#$%^&*()_+=-|}{":?><~`';
letters = letters.toUpperCase();
letters = letters.split('');

// Setting up the columns
var fontSize = 10;
var columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Setting up the draw function
/**
 * The draw function is called every 33 milliseconds.
 * It clears the canvas, then draws a random letter at each drop's current position.
 * If the drop has reached the bottom of the screen, it resets its position to 0 (the top).

 *
 *
 * @return An animation frame
 *
 * @docauthor Trelent
 */
function draw() {

    ctx.fillStyle = 'rgba(33,33,33, .25)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#00FF00';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
    }
}

// Loop the animation
setInterval(draw, 60);
