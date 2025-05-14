document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.nav-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the data-tab attribute value
            const tabId = this.getAttribute('data-tab');
            
            // Hide all content sections
            const contentSections = document.querySelectorAll('.content-section');
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Show the corresponding content section
            document.getElementById(tabId + '-content').classList.add('active');
            
            // Scroll to top of content
            document.getElementById(tabId + '-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // Contact form submission
    const contactForms = document.querySelectorAll('.contact-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const fullName = this.querySelector('input[placeholder="Full Name*"]').value;
            const phoneNumber = this.querySelector('input[placeholder="Phone Number*"]').value;
            const emailAddress = this.querySelector('input[placeholder="Email Address*"]').value;
            
            // Validate form (basic validation)
            if (!fullName || !phoneNumber || !emailAddress) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the form data to your server
            console.log('Form submitted:', {
                fullName,
                phoneNumber,
                emailAddress
            });
            
            // Show success message
            alert('Thank you for your message. We will get back to you soon!');
            
            // Reset form
            this.reset();
        });
    });
    
    // WhatsApp button functionality
    const whatsappButton = document.querySelector('.whatsapp-button');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            window.open('https://wa.me/919946144333', '_blank');
        });
    }
    
    // Close modal when clicking outside of the image
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

// Image modal functionality
function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const img = element.querySelector('img');
    const caption = element.querySelector('.gallery-caption');
    
    modalImg.src = img.src;
    modalCaption.textContent = caption.textContent;
    
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    
    // Add a small delay before setting display to none to allow the fade-out animation
    setTimeout(() => {
        if (!modal.classList.contains('show')) {
            modal.style.display = 'none';
        }
    }, 300);
    
    document.body.style.overflow = ''; // Re-enable scrolling
}

function submitForm(){
  const form = document.getElementById('enquiryForm');

  if (!form.checkValidity()) {
    form.reportValidity(); // shows built-in validation messages
    return; // stop execution if invalid
  }

  const formData = new FormData(form);
  const data = {};

  // Collect data from inputs with 'name' attribute
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Get phone number and country code manually
  const phoneWrapper = form.querySelector('.phone-input-wrapper');
  const countryCode = phoneWrapper.querySelector('select').value;
  const phone = phoneWrapper.querySelector('input[type="tel"]').value;

  data['Phone'] = `${countryCode} ${phone}`;

  console.log('Submitted Data:', data);
  console.log('submitteed');

  form.reset()

  if(data){
    closeModal();
    showSuccessModal();
  }
}