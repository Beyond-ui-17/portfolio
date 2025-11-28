document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;
    const icon = modeToggle.querySelector('i');

    const savedMode = localStorage.getItem('theme') || 'light';
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        }
    });

    window.toggleMenu = function() {
        const mobileNav = document.getElementById('mobile-nav');
        mobileNav.classList.toggle('active');
        
        const menuIcon = document.querySelector('.mobile-menu-icon i');
        if (mobileNav.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const mobileNav = document.getElementById('mobile-nav');
            if (mobileNav.classList.contains('active')) {
                window.toggleMenu();
            }
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // New: Lighting Effect on Click
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.addEventListener('click', () => {
            profilePic.classList.add('clicked-glow');
            
            // Remove the glow after 500ms for a flash effect
            setTimeout(() => {
                profilePic.classList.remove('clicked-glow');
            }, 500);
        });
    }
});