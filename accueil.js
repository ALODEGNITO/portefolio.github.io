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
	



/* ================= MENU ACTIF AU SCROLL ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
	


