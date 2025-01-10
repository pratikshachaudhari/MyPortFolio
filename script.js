const containers = document.querySelectorAll('.container');

// Create an Intersection Observer
const observer1 = new IntersectionObserver((entries, observer1) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class
            observer1.unobserve(entry.target); // Stop observing after animation
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the container is visible
});

// Observe each container
containers.forEach(container => observer1.observe(container));

// Add animations for fade-in effects
const fadeInSections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});


// Select all timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

// Create an Intersection Observer
const observer3 = new IntersectionObserver((entries, observer3) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class
            entry.target.style.transitionDelay = `${index * 0.2}s`; // Stagger effect
            observer3.unobserve(entry.target); // Stop observing after animation
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the item is visible
});

// Observe each timeline item
timelineItems.forEach(item => observer3.observe(item));


// Slideshow functionality
const slides = document.querySelectorAll('.project-slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});

// Initialize first slide
showSlide(currentIndex);

const textArray = [
    "System Engineer",
    "Team Player",
    "Software Engineer"
];

let Index = 0;

function changeText() {
    Index = (Index + 1) % textArray.length;  // Cycle through the array
    document.getElementById('changingText').innerText = textArray[Index];
}

setInterval(changeText, 2000);  // Change text every 2 seconds


