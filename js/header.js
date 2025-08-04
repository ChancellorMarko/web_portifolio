// Scroll Effect

let lastScroll = 0;
const header = document.querySelector('header');
const scrollThreshold = 350; // Pixels to hide header

window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    // Header is shortened when the user starts to scroll down
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Hide the header when the user scroolls past the threshold
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});

// Hamburg menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navBar = document.getElementById('nav-bar');
    const header = document.querySelector('header');
    const navOverlay = document.createElement('div');

    // Creates the overlay
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);

    // Close and open logic
    menuToggle.addEventListener('click', function ()
    {
        this.classList.toggle('active');
        navBar.classList.toggle('active');
        navOverlay.classList.toggle('active');
        header.classList.toggle('active');
        document.body.style.overflow = navBar.classList.contains('active') ? 'hidden' : '';
    });

    navOverlay.addEventListener('click', closeMenu);
    document.querySelectorAll('#nav-bar a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    function closeMenu() {
        menuToggle.classList.remove('active');
        navBar.classList.remove('active');
        navOverlay.classList.remove('active');
        header.classList.remove('active');
        document.body.style.overflow = '';
    }
});