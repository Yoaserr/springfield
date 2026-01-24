document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.onclick = () => {
        navLinks.classList.toggle("show"); // show/hide menu
        menuToggle.classList.toggle("active"); // animate hamburger
    };
});


    // Sticky header
    const nav = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });

    // Hamburger menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");
    menuToggle.onclick = () => {
        navLinks.classList.toggle("show");
    };

    // Reveal animations
    window.addEventListener("scroll", () => {
        document.querySelectorAll(".reveal").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    });
});

