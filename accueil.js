// ===== PORTFOLIO - PAGE ACCUEIL =====
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
    const skillsSection = document.querySelector(".skills");
    const bars = document.querySelectorAll(".bar span");

    if (skillsSection && bars.length > 0) {

        // Initialisation : barres vides
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
        }, {
            threshold: 0.4
        });

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

    /* ================= MODAL PROJETS ================= */
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalLink = document.getElementById("modalLink");
    const closeModal = document.querySelector(".close-modal");
    
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            modalTitle.textContent = card.querySelector("h3").textContent;
            modalDescription.textContent = card.querySelector("p").textContent;
            modalLink.href = card.querySelector("a").href;
    
            modal.classList.add("show");
        });
    });
    
    closeModal.addEventListener("click", () => {
        modal.classList.remove("show");
    });
    
    modal.addEventListener("click", e => {
        if (e.target === modal) modal.classList.remove("show");
    });


    /* ================= SETTINGS PANEL ================= */
    const settingsBtn = document.getElementById("settingsBtn");
    const settingsPanel = document.getElementById("settingsPanel");
    
    // Ouvrir / fermer
    settingsBtn.addEventListener("click", () => {
        settingsPanel.classList.toggle("active");
    });
    
    // Changer couleur principale
    document.querySelectorAll(".colors span").forEach(color => {
        color.addEventListener("click", () => {
            const value = color.getAttribute("data-color");
            document.documentElement.style.setProperty("--primary", value);
            localStorage.setItem("themeColor", value);
        });
    });
    
    // Charger couleur sauvegardée
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
        document.documentElement.style.setProperty("--primary", savedColor);
    }
    
    /* ================= LANGUAGE SWITCH ================= */
    const languageSelect = document.getElementById("languageSelect");
    
    languageSelect.addEventListener("change", () => {
        const lang = languageSelect.value;
        document.querySelectorAll("[data-fr]").forEach(el => {
            el.textContent = el.dataset[lang];
        });
        localStorage.setItem("lang", lang);
    });
    
    // Charger langue sauvegardée
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
        languageSelect.value = savedLang;
        document.querySelectorAll("[data-fr]").forEach(el => {
            el.textContent = el.dataset[savedLang];
        });
    }
    


});



