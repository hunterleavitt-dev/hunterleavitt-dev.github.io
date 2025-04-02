document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.aero-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor jump

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Align top of the target element to the top of the viewport
                });
            }
        });
    });

    // --- Update Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Example: Simple interaction for a button ---
    const contactButton = document.getElementById('contact-button-js');
    const contactResponse = document.getElementById('contact-response');

    if (contactButton && contactResponse) {
        contactButton.addEventListener('click', () => {
            // Add a "pressed" visual style temporarily (optional)
            contactButton.style.transform = 'translateY(1px)';
            contactButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';

            // Simulate an action or response
            contactResponse.textContent = 'Thanks for clicking! Check the console (F12).';
            console.log('Hello button clicked!');

            // Reset button style after a short delay
            setTimeout(() => {
                contactButton.style.transform = '';
                contactButton.style.boxShadow = ''; // Reset to CSS default
                 // Optionally clear the message after a longer delay
                 // setTimeout(() => { contactResponse.textContent = ''; }, 3000);
            }, 200); // 200 milliseconds
        });
    }

    // --- Add subtle hover effect to project items (optional enhancement) ---
    // const projectItems = document.querySelectorAll('.project-item');
    // projectItems.forEach(item => {
    //     item.addEventListener('mouseenter', () => {
    //         // You could add more complex JS animations here if desired
    //     });
    //     item.addEventListener('mouseleave', () => {
    //         // Reset animations
    //     });
    // });

    console.log("Frutiger Aero Skeleton Initialized!");
});