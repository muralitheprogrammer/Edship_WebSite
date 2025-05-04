ocument.addEventListener('DOMContentLoaded', function () {
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
  