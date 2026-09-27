const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section');
const revealItems = document.querySelectorAll('.reveal');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('show');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navItems.forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const setActiveLink = () => {
    let currentSection = 'home';

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section.id;
        }
    });

    navItems.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${currentSection}`;
        link.classList.toggle('active', isActive);
    });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const buttons = document.querySelectorAll('.primary-btn, .secondary-btn, .project-links a, .contact-links a');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.98)';
        setTimeout(() => {
            button.style.transform = '';
        }, 140);
    });
});
