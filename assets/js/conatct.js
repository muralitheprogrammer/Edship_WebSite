document.addEventListener('DOMContentLoaded', function() {
  (function() {
    emailjs.init('_WGkR1-F5nFuvhTd4'); // <-- your public key
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = document.querySelector('#contact-form button[type="submit"]');
    submitButton.disabled = true;  // Disable the button while submitting

    const loadingMessage = document.createElement('span');
    loadingMessage.textContent = 'Sending message...';
    submitButton.parentElement.appendChild(loadingMessage);

    emailjs.sendForm('service_yq5no2f', 'template_x0217h4', this)
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




const form = document.getElementById('enquiryForm');
    const popup = document.getElementById('popup');
    const downloadLink = document.getElementById('pdfDownload');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Show the popup
      popup.style.display = 'block';

      // Start PDF download after 1 second
      setTimeout(() => {
        downloadLink.click();
      }, 1000);
    });

    function closePopup() {
      popup.style.display = 'none';
      form.reset(); // optional: reset form after close
    }