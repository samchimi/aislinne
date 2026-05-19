document.addEventListener('DOMContentLoaded', () => {
    const friendCards = document.querySelectorAll('.friend-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Unobserve after it becomes visible if you only want it once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    friendCards.forEach(card => {
        observer.observe(card);
    });
});