document.addEventListener("DOMContentLoaded", () => {
    const dynamicTxt = document.getElementById("dynamic-txt")
    const phrases = [
      "School Administration",
      "Attendance & Fee Management",
      "Student & Vehicle Tracking",
      "Time Tables & Exams",
      "AI - ML Insights",
    ]
  
    let currentPhraseIndex = 0
    let currentCharIndex = 0
    let isDeleting = false
    let typingSpeed = 100
  
    function typeEffect() {
      const currentPhrase = phrases[currentPhraseIndex]
  
      if (isDeleting) {
        // Deleting text
        dynamicTxt.textContent = currentPhrase.substring(0, currentCharIndex - 1)
        currentCharIndex--
        typingSpeed = 50 // Faster when deleting
      } else {
        // Typing text
        dynamicTxt.textContent = currentPhrase.substring(0, currentCharIndex + 1)
        currentCharIndex++
        typingSpeed = 100 // Normal speed when typing
      }
  
      // If we've finished typing the current phrase
      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // Pause at the end of typing
        isDeleting = true
        typingSpeed = 1500 // Wait before starting to delete
      }
      // If we've finished deleting the current phrase
      else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length
        typingSpeed = 500 // Pause before typing the next phrase
      }
  
      setTimeout(typeEffect, typingSpeed)
    }
  
    // Start the typing animation
    typeEffect()
  })
  

  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navigation-circle a")
    const featureSets = {
      principal: document.querySelector(".principal-features"),
      staff: document.querySelector(".staff-features"),
      parent: document.querySelector(".parent-features"),
      student: document.querySelector(".student-features"),
    }
    const connectingCircle = document.querySelector(".connecting-circle")
  
    // Handle navigation clicks
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
  
        // Remove active class from all links
        navLinks.forEach((l) => l.classList.remove("active"))
  
        // Add active class to clicked link
        link.classList.add("active")
  
        // Get the selected role
        const role = link.getAttribute("data-role")
  
        // Update the connecting circle style
        updateConnectingCircle(role)
  
        // Show the selected feature set and hide others
        switchFeatureSet(role)
      })
    })
  
    // Update the connecting circle based on role
    function updateConnectingCircle(role) {
      // Remove all role classes
      connectingCircle.classList.remove("principal", "staff", "parent", "student")
  
      // Add the selected role class
      connectingCircle.classList.add(role)
    }
  
    // Switch between feature sets
    function switchFeatureSet(role) {
      // Hide all feature sets
      Object.values(featureSets).forEach((set) => {
        set.classList.remove("active")
      })
  
      // Show the selected feature set
      featureSets[role].classList.add("active")
  
      // Animate the feature icons
      animateFeatureIcons(featureSets[role])
    }
  
    // Animate feature icons when changing roles
    function animateFeatureIcons(featureSet) {
      const featureItems = featureSet.querySelectorAll(".admin-item")
  
      featureItems.forEach((item, index) => {
        item.style.opacity = 0
        item.style.transform = getBaseTransform(index)
  
        setTimeout(() => {
          item.style.opacity = 1
  
          // Pulse animation
          setTimeout(() => {
            // Scale up slightly
            item.style.transform = getScaledTransform(index, 1.05)
  
            setTimeout(() => {
              // Return to original position
              item.style.transform = getBaseTransform(index)
            }, 300)
          }, 200)
        }, index * 100) // Stagger the animations
      })
    }
  
    // Helper function to get the base transform based on index
    function getBaseTransform(index) {
      // Calculate angle for each icon (360 degrees / 14 icons)
      const angleStep = 360 / 14
      const angle = (index * angleStep * Math.PI) / 180
      const radius = 200
  
      // Calculate x and y coordinates based on angle
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
  
      return `translate(${x}px, ${y}px)`
    }
  
    // Helper function to get the scaled transform based on index and scale
    function getScaledTransform(index, scale) {
      // Calculate angle for each icon (360 degrees / 14 icons)
      const angleStep = 360 / 14
      const angle = (index * angleStep * Math.PI) / 180
      const radius = 200 * scale
  
      // Calculate x and y coordinates based on angle
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
  
      return `translate(${x}px, ${y}px)`
    }
  
    // Add hover effects for feature items
    document.querySelectorAll(".admin-item").forEach((item) => {
      const icon = item.querySelector(".icon")
  
      item.addEventListener("mouseenter", () => {
        // Highlight the icon
        item.style.zIndex = "15"
        item.querySelector(".icon").style.transform = "scale(1.1)"
      })
  
      item.addEventListener("mouseleave", () => {
        item.style.zIndex = "5"
        item.querySelector(".icon").style.transform = "scale(1)"
      })
    })
  
    // Initialize with principal features
    animateFeatureIcons(featureSets.principal)
  })
  
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navigation-circle a")
    const featureSets = {
      principal: document.querySelector(".principal-features"),
      staff: document.querySelector(".staff-features"),
      parent: document.querySelector(".parent-features"),
      student: document.querySelector(".student-features"),
    }
    const connectingCircle = document.querySelector(".connecting-circle")
  
    // Handle navigation clicks
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
  
        // Remove active class from all links
        navLinks.forEach((l) => l.classList.remove("active"))
  
        // Add active class to clicked link
        link.classList.add("active")
  
        // Get the selected role
        const role = link.getAttribute("data-role")
  
        // Update the connecting circle style
        updateConnectingCircle(role)
  
        // Show the selected feature set and hide others
        switchFeatureSet(role)
      })
    })
  
    // Update the connecting circle based on role
    function updateConnectingCircle(role) {
      // Remove all role classes
      connectingCircle.classList.remove("principal", "staff", "parent", "student")
  
      // Add the selected role class
      connectingCircle.classList.add(role)
    }
  
    // Switch between feature sets
    function switchFeatureSet(role) {
      // Hide all feature sets
      Object.values(featureSets).forEach((set) => {
        set.classList.remove("active")
      })
  
      // Show the selected feature set
      featureSets[role].classList.add("active")
  
      // Animate the feature icons
      animateFeatureIcons(featureSets[role])
    }
  
    // Animate feature icons when changing roles
    function animateFeatureIcons(featureSet) {
      const featureItems = featureSet.querySelectorAll(".teacher-item")
  
      featureItems.forEach((item, index) => {
        item.style.opacity = 0
        item.style.transform = getBaseTransform(index)
  
        setTimeout(() => {
          item.style.opacity = 1
  
          // Pulse animation
          setTimeout(() => {
            // Scale up slightly
            item.style.transform = getScaledTransform(index, 1.05)
  
            setTimeout(() => {
              // Return to original position
              item.style.transform = getBaseTransform(index)
            }, 300)
          }, 200)
        }, index * 100) // Stagger the animations
      })
    }
  
    // Helper function to get the base transform based on index
    function getBaseTransform(index) {
      // Calculate angle for each icon (360 degrees / 14 icons)
      const angleStep = 360 / 14
      const angle = (index * angleStep * Math.PI) / 180
      const radius = 200
  
      // Calculate x and y coordinates based on angle
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
  
      return `translate(${x}px, ${y}px)`
    }
  
    // Helper function to get the scaled transform based on index and scale
    function getScaledTransform(index, scale) {
      // Calculate angle for each icon (360 degrees / 14 icons)
      const angleStep = 360 / 14
      const angle = (index * angleStep * Math.PI) / 180
      const radius = 200 * scale
  
      // Calculate x and y coordinates based on angle
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
  
      return `translate(${x}px, ${y}px)`
    }
  
    // Add hover effects for feature items
    document.querySelectorAll(".teacher-item").forEach((item) => {
      const icon = item.querySelector(".icon")
  
      item.addEventListener("mouseenter", () => {
        // Highlight the icon
        item.style.zIndex = "15"
        item.querySelector(".icon").style.transform = "scale(1.1)"
      })
  
      item.addEventListener("mouseleave", () => {
        item.style.zIndex = "5"
        item.querySelector(".icon").style.transform = "scale(1)"
      })
    })
  
    // Initialize with principal features
    animateFeatureIcons(featureSets.principal)
  })

  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.sms-module-card');
    
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        cards.forEach(card => {
            card.addEventListener('touchstart', function(e) {
                // Prevent default behavior
                e.preventDefault();
                e.stopPropagation();
                
                // Toggle active class
                const wasActive = this.classList.contains('active');
                
                // Remove active class from all cards
                cards.forEach(c => c.classList.remove('active'));
                
                // If this card wasn't active before, make it active
                if (!wasActive) {
                    this.classList.add('active');
                }
            }, {passive: false});
        });
        
        // Close panels when touching outside
        document.addEventListener('touchstart', function(e) {
            // Check if the touch is not on a card
            let touchOnCard = false;
            cards.forEach(card => {
                if (card.contains(e.target)) {
                    touchOnCard = true;
                }
            });
            
            if (!touchOnCard) {
                cards.forEach(card => card.classList.remove('active'));
            }
        }, {passive: true});
    }
});



document.addEventListener('DOMContentLoaded', function () {
  const duration = 20000; //ms
  const directionAnimation = 'left';  //left or right  

  const marquee = document.querySelector('.marquee');
  const span = marquee.querySelector('span');

  const marqueeWidth = marquee.offsetWidth;
  const spanWidth = span.offsetWidth;

 let keyframes = [];
 if('left' == directionAnimation){
   keyframes = [        
      { transform: `translateX(${marqueeWidth}px)` },
      { transform: `translateX(${-spanWidth}px)` }
  ];
 }
 else if('right' == directionAnimation){
    keyframes = [        
      { transform:  `translateX(${-spanWidth}px)`},
      { transform: `translateX(${marqueeWidth}px)` }
  ];
 }

  let options = {
      duration: duration, // Durata dell'animazione in millisecondi
      iterations: Infinity,
      easing: "linear"
  };

  const marqueeAnimation = span.animate(keyframes, options);
  
  marquee.addEventListener('mouseenter', () => {
     marqueeAnimation.pause();
  });

  marquee.addEventListener('mouseleave', () => {
      marqueeAnimation.play();
  });
});




function openModal(event) {
  event.preventDefault();
  document.getElementById('enquiryModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('enquiryModal').style.display = 'none';
}

function openModal1(event) {
  event.preventDefault();
  document.getElementById('bookingPopup').style.display = 'block';
}

function closeModal1() {
  document.getElementById('bookingPopup').style.display = 'none';
}

function handleFormSubmit(event) {
  event.preventDefault();

  // Optional: send form data here via AJAX

  // Trigger PDF download
  window.location.href = 'assets/img/pdf/pdfschool.pdf';

  // Close the modal
  closeModal();
}

// Optional: Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('enquiryModal');
  if (event.target == modal) {
    closeModal();
  }
}

// 


// Function to open the modal
function openModal(event) {
  // Prevent default link behavior
  event.preventDefault();
  
  // Show the modal
  document.getElementById('enquiryModal').style.display = 'block';
  
  // Prevent scrolling on the body when modal is open
  document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
  // Hide the modal
  document.getElementById('enquiryModal').style.display = 'none';
  
  // Reset form and views
  document.getElementById('form-container').style.display = 'block';
  document.getElementById('thank-you-container').style.display = 'none';
  document.getElementById('brochureForm').reset();
  
  // Allow scrolling on the body again
  document.body.style.overflow = 'auto';
}

// Function to handle form submission
function handleFormSubmit(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  
  // Basic form validation
  if (!name || !phone || !email) {
      alert('Please fill all required fields');
      return;
  }
  
  // In a real application, you would send this data to your server
  console.log('Form submitted:', { name, phone, email });
  
  // Hide the form container
  document.getElementById('form-container').style.display = 'none';
  
  // Show the thank you container
  document.getElementById('thank-you-container').style.display = 'block';
  
  // Automatically trigger the download after a short delay
  setTimeout(function() {
      document.getElementById('download-link').click();
  }, 500);
}

// When the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Close modal when clicking outside the modal content
  window.onclick = function(event) {
      const modal = document.getElementById('enquiryModal');
      if (event.target == modal) {
          closeModal();
      }
  }
});



  // Country list with dialing codes (you can extend this list)
  const countries = [
    { name: "India", code: "+91" },
    { name: "U S", code: "+1" },
    { name: "U K", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "Singapore", code: "+65" },
    { name: "UAE", code: "+971" },
    { name: "China", code: "+86" },
    { name: "Brazil", code: "+55" },
    { name: "Japan", code: "+81" }
  ];

  // Populate country code dropdown
  function populateCountryCodes() {
    const select = document.getElementById("country-code");
    select.innerHTML = ""; // Clear existing options

    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.code;
      option.text = `${country.name} (${country.code})`;
      select.appendChild(option);
    });

    // Default to India
    select.value = "+91";
  }

  // Open modal
  function openModal(event) {
    event.preventDefault();
    document.getElementById("enquiryModal").style.display = "block";
    document.getElementById("thank-you-container").style.display = "none";
    document.querySelector(".enquiry-form-section").style.display = "block";
    populateCountryCodes();
  }

  // Close modal
  function closeModal() {
    document.getElementById("enquiryModal").style.display = "none";
  }

  // Close thank you popup if using separate modal
  function closeThankYou() {
    document.getElementById("thank-you-container").style.display = "none";
  }

  // Handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    // You can validate or send data to server here...

    // Simulate delay
    setTimeout(() => {
      // Reset form
      document.getElementById("enquiryForm").reset();

      // Hide form and show thank you message
      document.querySelector(".enquiry-form-section").style.display = "none";
      document.getElementById("thank-you-container").style.display = "block";

      // Trigger brochure download
      const downloadLink = document.createElement("a");
      downloadLink.href = "assets/img/pdf/pdfschool.pdf";
      downloadLink.download = "Edship_Brochure.pdf";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }, 400);
  }

  // Optional: Close modal when clicking outside
  window.onclick = function (event) {
    const modal = document.getElementById("enquiryModal");
    if (event.target === modal) {
      closeModal();
    }
  };

  // Automatically populate country codes when page loads
  window.onload = function () {
    populateCountryCodes();
  };


document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const bookingPopup = document.getElementById('bookingPopup');
  const thankYouPopup = document.getElementById('thankYouPopup');
  const demoRequestForm = document.getElementById('demoRequestForm');
  
  // Open booking popup function
  function openBookingPopup() {
    bookingPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
  
  // Close booking popup function
  window.closeModal1 = function(event) {
    if (event) {
      event.preventDefault();
    }
    bookingPopup.style.display = 'none';
    document.body.style.overflow = ''; // Enable background scrolling
  };
  
  // Open thank you popup
  function openThankYouPopup() {
    thankYouPopup.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  
  // Close thank you popup
  window.closeThankYouModal = function(event) {
    if (event) {
      event.preventDefault();
    }
    thankYouPopup.style.display = 'none';
    document.body.style.overflow = '';
  };
  
  // Find any buttons that should open the booking popup
  const bookNowButtons = document.querySelectorAll('.demo-request-link, [data-open-popup="booking"]');
  bookNowButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      openBookingPopup();
    });
  });
  
  // Close popups when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === bookingPopup) {
      closeModal1(e);
    }
    if (e.target === thankYouPopup) {
      closeThankYouModal(e);
    }
  });
  
  // Form submission
  if (demoRequestForm) {
    demoRequestForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(demoRequestForm);
      const formValues = {};
      
      formData.forEach((value, key) => {
        formValues[key] = value;
      });
      
      console.log('Form submitted:', formValues);
      
      // Here you would typically send the data to your server
      // For example:
      // fetch('/api/submit-demo-request', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formValues),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      //   closeModal1();
      //   openThankYouPopup();
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      //   alert('There was an error submitting your request. Please try again.');
      // });
      
      // For demo purposes, we'll just simulate a successful submission
      setTimeout(() => {
        closeModal1();
        demoRequestForm.reset();
        
        // Show thank you popup
        setTimeout(() => {
          openThankYouPopup();
        }, 300);
      }, 1000);
    });
  }
  
  // Add escape key listener to close popups
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (bookingPopup.style.display === 'flex') {
        closeModal1(e);
      }
      if (thankYouPopup.style.display === 'flex') {
        closeThankYouModal(e);
      }
    }
  });
});

  