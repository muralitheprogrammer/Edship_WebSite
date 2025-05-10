/**
* Template Main JS File
*/
document.addEventListener('DOMContentLoaded', function() {
    "use strict";
  
    /**
     * Mobile nav toggle
     */
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navmenu = document.querySelector('#navmenu');
    
    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', function(e) {
        document.body.classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
        
        if (navmenu) {
          navmenu.classList.toggle('navmenu-mobile');
        }
      });
    }
  
    /**
     * Mobile nav dropdowns activate
     */
    document.querySelectorAll('.navmenu .dropdown > a').forEach(function(el) {
      el.addEventListener('click', function(e) {
        if (document.body.classList.contains('mobile-nav-active')) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle('dropdown-active');
        }
      });
    });
  
    /**
     * Scroll to top button
     */
    function toggleScrollTop() {
      if (window.scrollY > 100) {
        document.querySelector('.scroll-top').classList.add('active');
      } else {
        document.querySelector('.scroll-top').classList.remove('active');
      }
    }
    
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
    
    document.querySelector('.scroll-top').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    /**
     * Form submission and thank you popup
     */
    const contactForm = document.querySelector('.php-email-form');
    const thankYouPopup = document.getElementById('thankYouPopup');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        setTimeout(function() {
          if (thankYouPopup) {
            thankYouPopup.style.display = 'block';
            
            // Hide popup after animation completes
            setTimeout(function() {
              thankYouPopup.style.display = 'none';
            }, 3000);
          }
          
          // Reset form
          contactForm.reset();
        }, 1000);
      });
    }
  
    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    }
    window.addEventListener('load', function() {
      aos_init();
    });
  });