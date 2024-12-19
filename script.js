var typed = new Typed('#typed', {
        strings: ['Frontend Developer', 'Business Analyst', 'Software Developer', 'Fullstack Developer'],
         typeSpeed: 50,
         backSpeed: 30,
         loop: true
     });

// Create the canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Resize the canvas to cover the entire document height
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

// Adjust canvas size on load and resize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Generate stars
let stars = [];
for (let i = 0; i < 300; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
    });
}

// Draw stars on the canvas
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';

    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });

    updateStars();
    requestAnimationFrame(drawStars);
}
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Update stars' positions
function updateStars() {
    stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x > canvas.width || star.x < 0) star.dx *= -1;
        if (star.y > canvas.height || star.y < 0) star.dy *= -1;
    });
}

// Start the animation
drawStars();
