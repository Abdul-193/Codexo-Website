document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    status.textContent = name ? `Thank you for your message, ${name}!` : 'Thank you for your message!';
    form.reset();
  });
});
