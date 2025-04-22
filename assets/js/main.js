
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



const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openBtn.onclick = (e) => {
  e.preventDefault();
  popup.style.display = "block";
};
closeBtn.onclick = () => popup.style.display = "none";
window.onclick = (e) => {
  if (e.target === popup) popup.style.display = "none";
};


// toggele

document.addEventListener('DOMContentLoaded', function () {
  const duration = 100000; //ms
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


