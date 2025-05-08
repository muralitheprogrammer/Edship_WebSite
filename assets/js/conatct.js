document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.php-email-form');
  const thankYouPopup = document.getElementById('thankYouPopup');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Disable the submit button and show loading text
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission delay (replace with actual AJAX request)
    setTimeout(function () {
      // Example: Simulate success after 2 seconds
      const success = true; // Simulate successful submission

      if (success) {
        // Show the Thank You popup
        thankYouPopup.style.display = 'block';

        // Optionally, reset the form
        form.reset();
      }

      // Reset the submit button text and enable it again
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 2000); // Simulate a delay of 2 seconds
  });
});





