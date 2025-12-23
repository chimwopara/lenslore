// Theme and UI interactions
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('sunIcon').classList.toggle('hidden', isDark);
    document.getElementById('moonIcon').classList.toggle('hidden', !isDark);
    document.getElementById('sunIconMobile').classList.toggle('hidden', isDark);
    document.getElementById('moonIconMobile').classList.toggle('hidden', !isDark);
    localStorage.setItem('darkMode', isDark);
}

const observeAnimatedElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    elements.forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('sunIcon').classList.add('hidden');
        document.getElementById('moonIcon').classList.remove('hidden');
        document.getElementById('sunIconMobile').classList.add('hidden');
        document.getElementById('moonIconMobile').classList.remove('hidden');
    }
    
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
    document.getElementById('darkModeToggleMobile').addEventListener('click', toggleDarkMode);
    
    document.getElementById('mobile-menu-button').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('active');
    });
    
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobile-menu').classList.remove('active');
        });
    });
    
    observeAnimatedElements();
    window.addEventListener('resize', observeAnimatedElements);
});
