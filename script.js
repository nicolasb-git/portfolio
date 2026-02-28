document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    // Add subtle tilt effect on hover
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)`;
        });
    });

    // Header parallax-ish effect
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const h1 = document.querySelector('h1');
        const subtitle = document.querySelector('.subtitle');
        const blobs = document.querySelectorAll('.blob');

        if (h1) h1.style.transform = `translateY(${scrolled * 0.1}px)`;
        if (subtitle) subtitle.style.transform = `translateY(${scrolled * 0.05}px)`;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 0.1;
            blob.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});
