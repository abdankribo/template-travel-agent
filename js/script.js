// script.js

// Banner Auto Slide
let currentSlide = 0;
const slides = [
  'Your Trusted Travel Agent\'s',
  'Explore the World with Us',
  'Plan Your Dream Vacation Today'
];

function showNextSlide() {
  const bannerTitle = document.querySelector('.banner h1');
  currentSlide = (currentSlide + 1) % slides.length;
  bannerTitle.textContent = slides[currentSlide];
}

setInterval(showNextSlide, 3000);

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const interest = document.querySelector('#interest');

  if (!name.value.trim()) {
    alert('Please enter your name.');
    name.focus();
    return;
  }

  if (!email.value.trim() || !validateEmail(email.value)) {
    alert('Please enter a valid email address.');
    email.focus();
    return;
  }

  if (!interest.value) {
    alert('Please select your interest.');
    interest.focus();
    return;
  }

  alert('Form submitted successfully!');
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
