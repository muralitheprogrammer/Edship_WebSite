document.addEventListener('DOMContentLoaded', function() {
  (function() {
    emailjs.init('_WGkR1-F5nFuvhTd4'); // <-- your public key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_yq5no2f', 'template_x0217h4', this)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert('Your message has been sent successfully!');
         document.getElementById('contact-form').reset();
      }, function(error) {
         console.log('FAILED...', error);
         alert('There was a problem sending your message. Please try again.');
      });
  });
});
