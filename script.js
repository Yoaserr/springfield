document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded");
    

    // Example interaction
    const nav = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
});

document.querySelector(".menu-toggle").onclick = () => {
    document.querySelector("nav ul").classList.toggle("show");
};

window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});


