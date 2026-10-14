// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// WhatsApp quote form
const form = document.getElementById('quoteForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name');
    const phone = data.get('phone');
    const car = data.get('car');
    const year = data.get('year');
    const service = data.get('service');
    const message = data.get('message') || 'No extra message';

    const text =
      'Hello AutoRevive NG,%0A%0A' +
      'Name: ' + encodeURIComponent(name) + '%0A' +
      'Phone: ' + encodeURIComponent(phone) + '%0A' +
      'Car: ' + encodeURIComponent(car + ' ' + year) + '%0A' +
      'Service: ' + encodeURIComponent(service) + '%0A' +
      'Message: ' + encodeURIComponent(message);

    const whatsappNumber = '2349133064152';
    window.open('https://wa.me/' + whatsappNumber + '?text=' + text, '_blank');
  });
}
