const themeToggle = document.querySelector('.gradient-btn');
const body = document.body;
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');
const toggleButtons = document.querySelectorAll('.toggle-option');
const switchSlider = document.querySelector('#switch-slider');
const skillsContents = document.querySelectorAll('.skills-content');
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

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    toggleButtons.forEach(btn => btn.classList.remove('active'));
    skillsContents.forEach(content => content.classList.remove('active'));

    // Add active class to clicked button and corresponding content
    button.classList.add('active');
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');

    // Move slider based on button position
    if (target === 'coding') {
      switchSlider.style.left = '41%';
    } else {
      switchSlider.style.left = '44%';
    }
  });
});