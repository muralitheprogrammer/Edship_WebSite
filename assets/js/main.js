
(function() {
  "use strict";
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".services .service-card");

  function resetCards() {
    cards.forEach(c => c.classList.remove("expanded"));
  }

  cards.forEach(card => {
    card.addEventListener("mouseenter", function () {
      resetCards(); // Remove expanded class from all cards
      this.classList.add("expanded"); // Expand only hovered card
    });

    card.addEventListener("mouseleave", resetCards);
  });
});

// banner-carousel
function bannerCarouselOne() {
  $('.banner-carousel.banner-carousel-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 600,
    arrows: true,
    prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
  });
  $('.banner-carousel.banner-carousel-1').slickAnimation();
}
bannerCarouselOne();


// banner Carousel Two
function bannerCarouselTwo() {
  $('.banner-carousel.banner-carousel-2').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    speed: 600,
    arrows: true,
    prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
  });
}
bannerCarouselTwo();


// pageSlider
function pageSlider() {
  $('.page-slider').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    speed: 600,
    arrows: true,
    prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
  });
}
pageSlider();


// Shuffle js filter and masonry
function projectShuffle() {
  if ($('.shuffle-wrapper').length !== 0) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      sizer: '.shuffle-sizer',
      buffer: 1
    });
    $('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
    $('.shuffle-btn-group label').on('click', function () {
      $('.shuffle-btn-group label').removeClass('active');
      $(this).addClass('active');
    });
  }
}
projectShuffle();


// testimonial carousel
function testimonialCarousel() {
  $('.testimonial-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    speed: 600,
    arrows: false
  });
}
testimonialCarousel();


// team carousel
function teamCarousel() {
  $('.team-slide').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
teamCarousel();
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.main-carousel-track');
  const slides = document.querySelectorAll('.main-carousel-slide');
  const indicators = document.querySelectorAll('.carousel-indicator');
  const serviceCards = document.querySelectorAll('.service-card');
  let currentSlide = 0;
  let isAutoScrolling = true;

  function moveToSlide(index) {
      track.style.transition = "transform 0.5s ease-in-out";
      track.style.transform = `translateX(-${index * 100}%)`;
      indicators.forEach(ind => ind.classList.remove('active'));
      indicators[index].classList.add('active');
      currentSlide = index;
  }

  function startAutoScroll() {
      setInterval(() => {
          if (isAutoScrolling) {
              const nextSlide = (currentSlide + 1) % slides.length;
              moveToSlide(nextSlide);
          }
      }, 4000);
  }

  function resetInterval() {
      isAutoScrolling = false;
      setTimeout(() => (isAutoScrolling = true), 6000);
  }

  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          moveToSlide(index);
          resetInterval();
      });
  });

  // ** Mobile Swipe Support ** 
  let startX;
  track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
  });

  track.addEventListener('touchend', (e) => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
          moveToSlide((currentSlide + 1) % slides.length);
      } else if (endX - startX > 50) {
          moveToSlide((currentSlide - 1 + slides.length) % slides.length);
      }
      resetInterval();
  });

  startAutoScroll();
});
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.read-more-btn').forEach(function(button) {
    button.addEventListener("click", function() {
      let text = this.previousElementSibling;
      text.classList.toggle("expanded");

      if (text.classList.contains("expanded")) {
        this.textContent = "Read Less";
      } else {
        this.textContent = "Read More";
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const duration = 10000; //ms
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

// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}




// 



// const openBtn = document.getElementById("openPopup");
// const closeBtn = document.getElementById("closePopup");
// const popup = document.getElementById("popup");

// openBtn.onclick = (e) => {
//   e.preventDefault();
//   popup.style.display = "block";
// };
// closeBtn.onclick = () => popup.style.display = "none";
// window.onclick = (e) => {
//   if (e.target === popup) popup.style.display = "none";
// };


// toggele

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






// 
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    
    // Popup Elements
    const bookNowBtn = document.getElementById('bookNowBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupBtn = document.getElementById('closePopup');
    
    // Form Elements
    const edshipForm = document.getElementById('edshipForm');
    const countryCode = document.getElementById('edshipCountryCode');
    const dialCode = document.getElementById('edshipDialCode');
    const countryFlag = document.getElementById('edshipCountryFlag');
    const submitBtn = document.getElementById('edshipSubmitBtn');
    
    // Check if popup elements exist
    if (!bookNowBtn) {
        console.error('Book Now button not found!');
    }
    
    if (!popupOverlay) {
        console.error('Popup overlay not found!');
    }
    
    if (!closePopupBtn) {
        console.error('Close button not found!');
    }
    
    // Open popup when Book Now button is clicked
    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Book Now button clicked');
            popupOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    // Close popup when close button is clicked
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', function() {
            console.log('Close button clicked');
            popupOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Enable scrolling
        });
    }
    
    // Close popup when clicking outside the popup content
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === popupOverlay) {
                console.log('Clicked outside popup');
                popupOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Enable scrolling
            }
        });
    }
    
    // Form validation and submission
    if (edshipForm) {
        edshipForm.addEventListener('submit', function(e) {
            e.preventDefault();

            console.log('submitted from edshipform')
            
            // Get form values
            const name = document.getElementById('edshipName').value;
            const email = document.getElementById('edshipEmail').value;
            const schoolName = document.getElementById('edshipSchool').value;
            const type = document.getElementById('edshipType').value;
            const role = document.getElementById('edshipRole').value;
            const countryCodeValue = dialCode.textContent;
            const phone = document.getElementById('edshipPhone').value;
            const message = document.getElementById('edshipMessage').value;
            
            // Basic validation
            if (!name || !email || !schoolName || !type || !role || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^\d{6,15}$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid phone number (6-15 digits)');
                return;
            }
            
            // Disable button and show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'SUBMITTING...';
            }
            
            // Simulate form submission (replace with actual API call)
            setTimeout(function() {
                // Reset button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'SUBMIT';
                }
                
                // Close the popup after successful submission
                popupOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Enable scrolling
                
                // Show success message
                alert('Form submitted successfully!');
                
                // In a real implementation, you would send the data to your server
                console.log('Form Data:', {
                    name,
                    email,
                    schoolName,
                    type,
                    role,
                    phoneNumber: `${countryCodeValue}${phone}`,
                    message
                });
            }, 1500);
        });
    }
    
    // Add a direct click handler as a fallback
    if (bookNowBtn) {
        bookNowBtn.onclick = function(e) {
            e.preventDefault();
            console.log('Book Now button clicked (direct onclick)');
            if (popupOverlay) {
                popupOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };
    }
});





  const modal = document.getElementById("enquiryModal");
  const openBtn = document.getElementById("bookNowBtn");
  const form = document.getElementById("enquiryForm");

  // Open modal
  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
  });

  // Close modal function
  function closeModal() {
    modal.style.display = "none";
  }

  // Close modal if clicked outside
  window.onclick = function (e) {
    if (e.target == modal) {
      closeModal();
    }
  };

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Optional: validate inputs or send data here

    // Replace form content with thank you message
    form.innerHTML = `
      <div style="text-align: center; padding: 50px;">
        <h2 style="color: green;">Thank you!</h2>
        <p>Your submission has been received successfully.
		Our team will get back to you shortly.</p>
      </div>
    `;

    // Auto-close after 3 seconds
    setTimeout(() => {
      closeModal();

      // Reset form after closing
      setTimeout(() => {
        location.reload(); // Reload to reset form
      }, 500);
    }, 3000);
  });

/**
 * Thank You Popup Functionality
 */
document.addEventListener('DOMContentLoaded', function() {
  // Create thank you popup HTML structure
  const thankYouPopup = document.createElement('div');
  thankYouPopup.className = 'thank-you-popup';
  thankYouPopup.innerHTML = `
    <div class="thank-you-content">
      <span class="thank-you-close">&times;</span>
      <div class="checkmark-circle">
        <div class="background"></div>
        <div class="checkmark draw"></div>
      </div>
      <h2 class="thank-you-title">Thank You!</h2>
      <p class="thank-you-message">Your enquiry has been submitted successfully. Our team will get back to you shortly.</p>
      <button class="thank-you-button">Continue</button>
    </div>
  `;
  document.body.appendChild(thankYouPopup);

  // Get elements
  const enquiryForm = document.getElementById('enquiryForm');
  const enquiryModal = document.getElementById('enquiryModal');
  const closeBtn = thankYouPopup.querySelector('.thank-you-close');
  const continueBtn = thankYouPopup.querySelector('.thank-you-button');

  // Function to show thank you popup
  function showThankYouPopup() {
    thankYouPopup.style.display = 'flex';
  }

  // Function to hide thank you popup
  function hideThankYouPopup() {
    thankYouPopup.style.display = 'none';
  }

  // Close thank you popup when clicking the close button
  closeBtn.addEventListener('click', hideThankYouPopup);

  // Close thank you popup when clicking the continue button
  continueBtn.addEventListener('click', hideThankYouPopup);

  // Handle form submission
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to your server
      // For now, just show the thank you popup and close the enquiry modal
      
      // Close enquiry modal
      enquiryModal.style.display = 'none';
      document.body.style.overflow = '';
      
      // Reset form
      enquiryForm.reset();
      
      // Show thank you popup
      setTimeout(showThankYouPopup, 300);
    });
  }
});


// Add this JavaScript code to your main.js file or in a script tag at the end of your body

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navmenu = document.querySelector('.navmenu');
  
  if (mobileNavToggle && navmenu) {
    // Add close button to mobile menu
    const closeBtn = document.createElement('div');
    closeBtn.className = 'mobile-nav-close';
    closeBtn.innerHTML = '<i class="bi bi-x"></i>';
    navmenu.prepend(closeBtn);
    
    // Toggle mobile menu
    mobileNavToggle.addEventListener('click', function(e) {
      navmenu.classList.add('mobile-nav-active');
      mobileNavToggle.classList.remove('bi-list');
      mobileNavToggle.classList.add('bi-x');
      e.preventDefault();
    });
    
    // Close mobile menu
    closeBtn.addEventListener('click', function() {
      navmenu.classList.remove('mobile-nav-active');
      mobileNavToggle.classList.remove('bi-x');
      mobileNavToggle.classList.add('bi-list');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navmenu.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        navmenu.classList.remove('mobile-nav-active');
        mobileNavToggle.classList.remove('bi-x');
        mobileNavToggle.classList.add('bi-list');
      }
    });
    
    // Handle dropdown menus in mobile view
    const dropdownLinks = document.querySelectorAll('.navmenu .dropdown > a');
    
    dropdownLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        if (window.innerWidth < 992) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle('dropdown-active');
        }
      });
    });
  }
});


//  const enquiryForm = document.getElementById('enquiryForm');
 
  

  function closeModal() {
     const enquiryModal = document.getElementById('enquiryModal');
    enquiryModal.style.display = 'none';
  }

  function showSuccessModal() {
    const successModal = document.getElementById('successModal');
    successModal.style.display = 'block';
    setTimeout(() => {
      successModal.style.display = 'none';
    }, 4000);
  }

//   enquiryForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log("HELLLOOWOO")

//     const formData = new FormData(enquiryForm);
//     const data = {};

//     formData.forEach((value, key) => {
//       data[key] = value;
//     });

//     // Manually extract phone number and country code
//     const phoneWrapper = enquiryForm.querySelector('.phone-input-wrapper');
//     const countryCode = phoneWrapper.querySelector('select').value;
//     const phone = phoneWrapper.querySelector('input[type="tel"]').value;

//     data['Phone'] = `${countryCode} ${phone}`;

//     console.log("Form Data Submitted:", data);

//     closeModal();         // Close the enquiry modal
//     showSuccessModal();   // Show success message
//   });

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


