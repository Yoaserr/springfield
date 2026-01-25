/* Load header & footer first */
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Now the header is in the DOM, attach hamburger click
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        hamburger.classList.toggle("active");
        document.body.classList.toggle("no-scroll"); // optional: prevent scrolling when menu open
      });

      // Close menu when clicking a link
      navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("show");
          hamburger.classList.remove("active");
          document.body.classList.remove("no-scroll");
        });
      });
    }
  });

fetch("footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);
