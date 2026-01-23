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

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

        const savedColor = localStorage.getItem("themeColor");
        if (savedColor) {
            document.documentElement.style.setProperty("--primary", savedColor);
        }
    }

    /* ================= DARK MODE ================= */
    const darkBtn = document.getElementById("darkModeToggle");
    const body = document.body;

    const darkModeSaved = localStorage.getItem("darkMode");

    if (darkModeSaved === "enabled") {
        body.classList.add("dark");
        if (darkBtn) darkBtn.textContent = "☀️ Mode clair";
    }

    if (darkBtn) {
        darkBtn.addEventListener("click", () => {
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                localStorage.setItem("darkMode", "enabled");
                darkBtn.textContent = "☀️ Mode clair";
            } else {
                localStorage.setItem("darkMode", "disabled");
                darkBtn.textContent = "🌙 Mode sombre";
            }
        });
    }

    /* ================= LANGUAGE SWITCH (FR / EN) ================= */
    const languageSelect = document.getElementById("languageSelect");

    if (languageSelect) {

        languageSelect.addEventListener("change", () => {
            const lang = languageSelect.value;

            document.querySelectorAll("[data-fr]").forEach(el => {
                el.textContent = el.getAttribute(`data-${lang}`);
            });

            localStorage.setItem("lang", lang);
        });

        // Charger la langue sauvegardée
        const savedLang = localStorage.getItem("lang") || "fr";
        languageSelect.value = savedLang;

        document.querySelectorAll("[data-fr]").forEach(el => {
            el.textContent = el.getAttribute(`data-${savedLang}`);
        });
    }

});
