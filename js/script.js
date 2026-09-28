const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#travel-form');
const status = document.querySelector('#form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const interest = document.querySelector('#interest');

  if (!name.value.trim()) {
    showError('Please enter your name.', name);
    return;
  }

  if (!email.value.trim() || !validateEmail(email.value)) {
    showError('Please enter a valid email address.', email);
    return;
  }

  if (!interest.value) {
    showError('Please choose a destination.', interest);
    return;
  }

  status.textContent = `Beautiful choice, ${name.value.trim().split(' ')[0]}! We’ll be in touch within 24 hours.`;
  status.classList.add('success');
  form.reset();
});

function showError(message, field) {
  status.textContent = message;
  status.classList.remove('success');
  field.focus();
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navItems.forEach((item) => item.classList.toggle('active', item.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
