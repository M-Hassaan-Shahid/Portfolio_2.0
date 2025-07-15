// script.js
const themeToggle = document.querySelector('.gradient-btn');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLightMode = body.classList.contains('light-mode');
  document.getElementById('moon').style.display = isLightMode ? 'none' : 'block';
  document.getElementById('sun').style.display = isLightMode ? 'block' : 'none';
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}