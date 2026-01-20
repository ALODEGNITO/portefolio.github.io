// ===== PORTFOLIO - PAGE ACCUEIL =====
alert("JS chargé");

window.addEventListener('DOMContentLoaded', () => {

    /* ================= HERO ANIMATION ================= */
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');

    if (heroText && heroImage) {
        heroText.style.opacity = '0';
        heroImage.style.opacity = '0';

        heroText.style.transform = 'translateY(20px)';
        heroImage.style.transform = 'translateY(20px)';

        setTimeout(() => {
            heroText.style.transition = 'all 0.8s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 200);

        setTimeout(() => {
            heroImage.style.transition = 'all 0.8s ease';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }, 500);
    }

    /* ================= SKILLS ANIMATION ================= */
	document.addEventListener("DOMContentLoaded", () => {

    const skillsSection = document.querySelector(".skills");
    const bars = document.querySelectorAll(".bar span");

    if (!skillsSection || bars.length === 0) return;

    // Sécurité : remettre à 0
    bars.forEach(bar => bar.style.width = "0");

    let animated = false;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    bars.forEach((bar, index) => {
                        const value = bar.dataset.width;
                        setTimeout(() => {
                            bar.style.width = value;
                        }, index * 300);
                    });

                    observer.disconnect(); // stop proprement
                }
            });
        },
        {
            threshold: 0.4
        }
    );

    observer.observe(skillsSection);
});

