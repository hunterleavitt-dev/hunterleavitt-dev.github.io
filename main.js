// Initialize all sections as collapsed on page load
document.addEventListener('DOMContentLoaded', function() {
    const sections = ['about', 'experience'];
    sections.forEach(sectionId => {
        const content = document.getElementById(`content-${sectionId}`);
        const arrow = document.getElementById(`arrow-${sectionId}`);
        if (content && arrow) {
            content.classList.add('expanded');
            arrow.classList.add('expanded');
        }
    });

    // Handle navigation link clicks
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            expandSection(targetId);
            
            // Smooth scroll to section
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Toggle section expand/collapse
function toggleSection(sectionId) {
    const content = document.getElementById(`content-${sectionId}`);
    const arrow = document.getElementById(`arrow-${sectionId}`);
    
    if (content && arrow) {
        const isExpanded = content.classList.contains('expanded');
        
        if (isExpanded) {
            content.classList.remove('expanded');
            arrow.classList.remove('expanded');
        } else {
            content.classList.add('expanded');
            arrow.classList.add('expanded');
        }
    }
}

// Expand a specific section (used by navigation links)
function expandSection(sectionId) {
    const content = document.getElementById(`content-${sectionId}`);
    const arrow = document.getElementById(`arrow-${sectionId}`);
    
    if (content && arrow) {
        content.classList.add('expanded');
        arrow.classList.add('expanded');
    }
}
