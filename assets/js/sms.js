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