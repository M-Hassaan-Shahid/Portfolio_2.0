document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.querySelector('.gradient-btn');
  const body = document.body;
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar a');
  const toggleButtons = document.querySelectorAll('.toggle-option');
  const switchSlider = document.querySelector('#switch-slider');
  const skillsContents = document.querySelectorAll('.skills-content');
  const lazySections = document.querySelectorAll('[data-lazy]');
  const titles = [
    "Software Developer",
    "Web Developer",
    "Video Editor"
  ];
  let idx = 0;
  const span = document.querySelector('.stroke-fill-text');

  function animateTitle() {
    span.textContent = titles[idx];
    span.style.animation = 'none';
    // Trigger reflow to restart animation
    void span.offsetWidth;
    span.style.animation = null;
    idx = (idx + 1) % titles.length;
  }

  span.addEventListener('animationend', () => {
    setTimeout(animateTitle, 1000); // Wait 1s before next title
  });

  animateTitle();
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    document.getElementById('moon').style.display = isLightMode ? 'none' : 'block';
    document.getElementById('sun').style.display = isLightMode ? 'block' : 'none';
  });

  menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
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
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      skillsContents.forEach(content => content.classList.remove('active'));
      button.classList.add('active');
      const target = button.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });

  // Lazy loading with Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        void entry.target.offsetWidth; // Force repaint
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 10); // Small delay to ensure transition
        observer.unobserve(entry.target); // Stop observing once loaded
      }
    });
  }, {
    root: null, // Use viewport as root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of section is visible
  });

  [...lazySections, document.querySelector('footer')].forEach(section => {
    observer.observe(section);
  });
});