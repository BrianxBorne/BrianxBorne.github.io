import { renderNavbar } from "../components/navbar.js";
import { renderHero } from "../components/hero.js";
import { renderSkills } from "../components/skills.js";
import { renderProjects } from "../components/projects.js";
import { renderExperience } from "../components/experience.js";
import { renderCertifications } from "../components/certifications.js";
import { renderContact } from "../components/contact.js";

/* Render Components */

document.getElementById("site-header").innerHTML = renderNavbar();

document.getElementById("hero").outerHTML = renderHero();

document.getElementById("skills").outerHTML = renderSkills();

document.getElementById("projects").outerHTML = renderProjects();

document.getElementById("experience").outerHTML = renderExperience();

document.getElementById("certifications").outerHTML = renderCertifications();

document.getElementById("contact").outerHTML = renderContact();

/* Navigation */

const navbar = document.querySelector(".navbar");
const navbarMenu = document.getElementById("navbarMenu");
const navbarToggle = document.getElementById("navbarToggle");

if (navbar && navbarMenu && navbarToggle) {
    const closeMenu = () => {
        navbar.classList.remove("open");
        navbarToggle.setAttribute("aria-expanded", "false");
    };

    navbarToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("open");
        navbarToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".navbar__menu a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (!navbar.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });

    window.addEventListener(
        "scroll",
        () => {
            navbar.classList.toggle("scrolled", window.scrollY > 20);
        },
        { passive: true }
    );
}

/* Section Reveal Animation */

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
});
