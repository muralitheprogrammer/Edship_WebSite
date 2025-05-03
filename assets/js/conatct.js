document.addEventListener('DOMContentLoaded', function() {
  (function() {
    emailjs.init('ouVi9BrVZOp6-YpBq'); // <-- your public key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = document.querySelector('#contact-form button[type="submit"]');
    submitButton.disabled = true;  // Disable the button while submitting

    const loadingMessage = document.createElement('span');
    loadingMessage.textContent = 'Sending message...';
    submitButton.parentElement.appendChild(loadingMessage);

    emailjs.send("service_7hrk3xt","template_ypuboq6",this)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert('Your message has been sent successfully!');
         document.getElementById('contact-form').reset();
         submitButton.disabled = false; // Re-enable the button
         loadingMessage.remove(); // Remove the loading message
      }, function(error) {
         console.log('FAILED...', error);
         alert('There was a problem sending your message. Please try again.');
         submitButton.disabled = false; // Re-enable the button
         loadingMessage.remove(); // Remove the loading message
      });
  });
});