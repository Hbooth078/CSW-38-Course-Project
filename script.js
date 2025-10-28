// Select the canvas and set dimensions
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.9;

// Particle class
class Particle {
  constructor(x, y, radius, color, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
  }

  // Draw the particle
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  // Update position and handle bouncing
  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

// Create a single particle
const particle = new Particle(
  canvas.width / 2,
  canvas.height / 2,
  20,
  "skyblue",
  3,
  2
);

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particle.update();
  requestAnimationFrame(animate);
}

animate();

// Adjust canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth * 0.9;
  canvas.height = window.innerHeight * 0.9;
});
