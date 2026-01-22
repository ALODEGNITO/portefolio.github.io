// ===== PORTFOLIO - PAGE ACCUEIL =====

window.addEventListener("DOMContentLoaded", () => {

    /* ================= HERO ANIMATION ================= */
    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");

    if (heroText && heroImage) {
        heroText.style.opacity = "0";
        heroImage.style.opacity = "0";

        heroText.style.transform = "translateY(20px)";
        heroImage.style.transform = "translateY(20px)";

        setTimeout(() => {
            heroText.style.transition = "all 0.8s ease";
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }, 200);

        setTimeout(() => {
            heroImage.style.transition = "all 0.8s ease";
            heroImage.style.opacity = "1";
            heroImage.style.transform = "translateY(0)";
        }, 500);
    }

    /* ================= SKILLS ANIMATION ================= */
    const skillsSection = document.querySelector(".skills");
    const bars = document.querySelectorAll(".bar span");

    if (skillsSection && bars.length > 0) {

        bars.forEach(bar => bar.style.width = "0");
        let animated = false;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;

                    bars.forEach((bar, index) => {
                        const width = bar.getAttribute("data-width");
                        setTimeout(() => {
                            bar.style.width = width;
                        }, index * 200);
                    });
                }
            });
        }, { threshold: 0.4 });

        observer.observe(skillsSection);
    }

    /* ================= MENU ACTIF AU SCROLL ================= */
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-list a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
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

    /* ================= SETTINGS PANEL ================= */
    const settingsBtn = document.getElementById("settingsBtn");
    const settingsPanel = document.getElementById("settingsPanel");

    if (settingsBtn && settingsPanel) {

        // Ouvrir / fermer le panneau
        settingsBtn.addEventListener("click", () => {
            settingsPanel.classList.toggle("active");
        });

        // Changement de couleur
        document.querySelectorAll(".colors span").forEach(color => {
            color.addEventListener("click", () => {
                const value = color.dataset.color;
                document.documentElement.style.setProperty("--primary", value);
                localStorage.setItem("themeColor", value);
            });
        });

        // Charger la couleur sauvegardée
        const savedColor = localStorage.getItem("themeColor");
        if (savedColor) {
            document.documentElement.style.setProperty("--primary", savedColor);
        }
    }

});
