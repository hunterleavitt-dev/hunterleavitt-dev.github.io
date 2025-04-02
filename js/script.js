document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.aero-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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

    // --- Simple interaction for a button ---
    const contactButton = document.getElementById('contact-button-js');
    const contactResponse = document.getElementById('contact-response');

    const skeuoButton = document.getElementById('skeuomorphism-wiki-link');
    const frutiButton = document.getElementById('frutiger-aero-wiki-link');


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

    if (skeuoButton) {
        skeuoButton.addEventListener('click', () => {
            skeuoButton.style.transform = 'translateY(1px)';
            skeuoButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';

            window.location.href = "https://en.wikipedia.org/wiki/Skeuomorph";
            console.log('Skeuomorphism wiki link button clicked.');

            setTimeout(() => {
                skeuoButton.style.transform = '';
                skeuoButton.style.boxShadow = ''; 
            }, 200); 
        });
    }

    if (frutiButton) {
        frutiButton.addEventListener('click', () => {
            frutiButton.style.transform = 'translateY(1px)';
            frutiButton.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.2)';

            window.location.href = "https://en.wikipedia.org/wiki/Frutiger_Aero";
            console.log('Frutiger Aero wiki link button clicked.');

            setTimeout(() => {
                frutiButton.style.transform = '';
                frutiButton.style.boxShadow = ''; 
            }, 200); 
        });
    }

    // --- Add subtle hover effect to project items (optional enhancement) ---
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // add more complex JS animations here if desired
        });
        item.addEventListener('mouseleave', () => {
            // reset animations
        });
    });

    console.log("Frutiger Aero Skeleton Initialized!");
});