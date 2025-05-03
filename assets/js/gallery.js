// Sample gallery data - replace with your own images
const galleryData = [
    {
        id: 1,
        src: 'https://source.unsplash.com/random/800x600/?office',
        alt: 'Office Space'
    },
    {
        id: 2,
        src: 'https://source.unsplash.com/random/800x600/?workspace',
        alt: 'Modern Workspace'
    },
    {
        id: 3,
        src: 'https://source.unsplash.com/random/800x600/?meeting',
        alt: 'Team Meeting'
    },
    {
        id: 4,
        src: 'https://source.unsplash.com/random/800x600/?business',
        alt: 'Business Conference'
    },
    {
        id: 5,
        src: 'https://source.unsplash.com/random/800x600/?technology',
        alt: 'Modern Technology'
    },
    {
        id: 6,
        src: 'https://source.unsplash.com/random/800x600/?design',
        alt: 'Creative Design'
    }
];

// DOM elements
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Current image index
let currentIndex = 0;

/**
 * Populate the gallery with images from galleryData
 */
function populateGallery() {
    galleryData.forEach(item => {
        // Create gallery item container
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.id = item.id;
        
        // Create image element
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;
        img.loading = 'lazy'; // Enable lazy loading for better performance
        
        // Create zoom icon element
        const zoomIcon = document.createElement('div');
        zoomIcon.className = 'zoom-icon';
        zoomIcon.setAttribute('aria-hidden', 'true');
        
        // Append elements to gallery item
        galleryItem.appendChild(img);
        galleryItem.appendChild(zoomIcon);
        gallery.appendChild(galleryItem);
        
        // Add click event listener to open modal
        galleryItem.addEventListener('click', () => openModal(item.id - 1));
        
        // Add keyboard accessibility
        galleryItem.setAttribute('tabindex', '0');
        galleryItem.setAttribute('role', 'button');
        galleryItem.setAttribute('aria-label', `View ${item.alt}`);
        galleryItem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(item.id - 1);
            }
        });
    });
}

/**
 * Open the modal with the image at the specified index
 * @param {number} index - The index of the image to display
 */
function openModal(index) {
    currentIndex = index;
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Set focus on the close button for accessibility
    setTimeout(() => {
        closeBtn.focus();
    }, 100);
}

/**
 * Close the modal
 */
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    
    // Return focus to the gallery item that was clicked
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems[currentIndex].focus();
}

/**
 * Update the modal content with the current image
 */
function updateModalContent() {
    const item = galleryData[currentIndex];
    
    // Add a loading state
    modalImg.classList.add('loading');
    
    // Preload the image
    const preloadImg = new Image();
    preloadImg.src = item.src;
    preloadImg.onload = () => {
        modalImg.src = item.src;
        modalImg.alt = item.alt;
        caption.textContent = item.alt;
        modalImg.classList.remove('loading');
    };
    
    // If image fails to load
    preloadImg.onerror = () => {
        modalImg.src = 'placeholder.jpg'; // Replace with your placeholder image
        modalImg.alt = 'Image could not be loaded';
        caption.textContent = 'Image could not be loaded';
        modalImg.classList.remove('loading');
    };
}

/**
 * Navigate to the previous image
 */
function prevImage() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateModalContent();
}

/**
 * Navigate to the next image
 */
function nextImage() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateModalContent();
}

// Event listeners
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    switch (e.key) {
        case 'Escape':
            closeModal();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
});

// Touch swipe support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

modal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance for a swipe
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe left, go to next image
        nextImage();
    }
    
    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe right, go to previous image
        prevImage();
    }
}

// Initialize gallery when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateGallery();
});