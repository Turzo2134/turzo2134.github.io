// Dark Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light-mode';
if (currentTheme === 'dark-mode') {
  body.classList.add('dark-mode');
  if (themeToggle) themeToggle.textContent = '☀️ Light Mode';
}

// Listen for theme toggle
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
    themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    
    console.log(`Theme switched to: ${isDarkMode ? 'Dark' : 'Light'} Mode`);
  });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active Link Highlighting
function updateActiveLink() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

updateActiveLink();

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

// Console Confirmation
console.log('%c✨ Portfolio Loaded Successfully!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cTheme: ' + (body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode'), 'color: #8b5cf6; font-size: 14px;');
console.log('%cDark Mode Toggle: Available on top-right corner', 'color: #ec4899; font-size: 12px;');
