'use strict';
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  const closeNav = () => {
    if (!toggle || !nav) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('nav-open');
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', open);
      document.body.classList.toggle('nav-open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNav(); });
    document.addEventListener('click', event => {
      if (toggle.getAttribute('aria-expanded') === 'true' && !nav.contains(event.target) && !toggle.contains(event.target)) closeNav();
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 820) closeNav(); });
  }
  const year = document.getElementById('siteYear');
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.getElementById('quoteForm');
  if (form) {
    const serviceSelect = form.querySelector('[name="service"]');
    const requestedService = new URLSearchParams(window.location.search).get('service');
    if (serviceSelect && requestedService) {
      const normalizedRequest = requestedService.toLowerCase();
      const matchingOption = Array.from(serviceSelect.options).find(option => option.value && option.text.toLowerCase().includes(normalizedRequest));
      if (matchingOption) serviceSelect.value = matchingOption.value;
    }
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const value = key => String(data.get(key) || 'Not provided').trim();
      const msg = [
        'Hello AutoRevive NG, I would like to discuss a vehicle project.', '',
        `Name: ${value('name')}`, `Phone / WhatsApp: ${value('phone')}`,
        `Vehicle: ${value('car')}`, `Model year: ${value('year')}`,
        `Vehicle status: ${value('ownership')}`, `Indicative budget: ${value('budget')}`,
        `Service interest: ${value('service')}`, `Project details: ${value('message')}`, '',
        'I understand this is an enquiry only. Feasibility, scope, price and timing must be confirmed before any project is agreed.'
      ].join('\n');
      const url = 'https://wa.me/2349133064152?text=' + encodeURIComponent(msg);
      if (status) status.textContent = 'Opening WhatsApp so you can review and send your enquiry…';
      window.open(url, '_blank', 'noopener,noreferrer');
      if (status) status.innerHTML = 'WhatsApp should open in a new tab. If it does not, <a href="' + url + '" target="_blank" rel="noopener noreferrer">tap here to open your enquiry</a>.';
    });
  }
})();
