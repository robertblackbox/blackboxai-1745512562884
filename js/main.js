// Cookie consent functionality
function acceptCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
    localStorage.setItem('cookieConsent', 'accepted');
}

function rejectCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
    localStorage.setItem('cookieConsent', 'rejected');
}

// Check if user has already made a cookie choice
window.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
        document.getElementById('cookie-consent').style.display = 'none';
    }
});

// Form validation and handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic validation
            const emailTo = form.querySelector('input[placeholder="Email address"]').value;
            const emailFrom = form.querySelector('input[placeholder="Your email address"]').value;
            
            if (!emailTo || !emailFrom) {
                alert('Please fill in all required email fields');
                return;
            }
            
            if (!isValidEmail(emailTo) || !isValidEmail(emailFrom)) {
                alert('Please enter valid email addresses');
                return;
            }
            
            // Here you would typically handle the file upload and transfer
            alert('This is a demo. In a real implementation, this would initiate the file transfer.');
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add animation classes when elements enter viewport
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate-fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
