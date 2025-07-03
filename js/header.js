document.addEventListener('DOMContentLoaded', function () {
    // Hamburg menu
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('header').appendChild(menuToggle);

    const nav = document.querySelector('#nav-bar');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Scroll effect
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // On click hide menu
    document.querySelectorAll('#nav-bar a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992) {
                nav.classList.remove('active');
            }
        });
    });

    // Button animation
    const contactButton = document.getElementById('header-contact-button');
    contactButton.addEventListener('click', function () {
        window.location.href = '#contato';
    });
});