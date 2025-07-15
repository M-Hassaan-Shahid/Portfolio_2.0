const themeToggle = document.querySelector('.gradient-btn');
const body = document.body;
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLightMode = body.classList.contains('light-mode');
  document.getElementById('moon').style.display = isLightMode ? 'none' : 'block';
  document.getElementById('sun').style.display = isLightMode ? 'block' : 'none';
});

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});

window.addEventListener('click', (e) => {
  if (navbar.classList.contains('active') && 
      !navbar.contains(e.target) && 
      e.target !== menuIcon) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  }
});