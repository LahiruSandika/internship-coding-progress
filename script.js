// script.js - Step 8
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted — this is a demo for internship progress.');
  });
});
