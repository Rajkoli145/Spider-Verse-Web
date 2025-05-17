document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    
    function updateScroll() {
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;
        const heroTop = hero.offsetTop;
        
        // Calculate scroll progress
        const scrollProgress = (scrolled - (heroTop - viewportHeight)) / viewportHeight;
        document.documentElement.style.setProperty('--scroll', Math.min(1, Math.max(0, scrollProgress)));
        
        // Add visible class when hero section is in view
        if (scrollProgress > 0) {
            hero.classList.add('visible');
        } else {
            hero.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', updateScroll);
    updateScroll(); // Initial call
});
