const slider = this.$el.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
isDown = true;
startX = e.pageX;
scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
isDown = false;
});

slider.addEventListener('mouseup', () => {
isDown = false;
});

slider.addEventListener('mousemove', (e) => {
if (!isDown) return;
e.preventDefault();
const x = e.pageX;
const walk = (x - startX) * 3; // Adjust this value for smoother scrolling
slider.scrollLeft = scrollLeft - walk;
});