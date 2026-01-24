document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  console.log(hamburger, navLinks); // DEBUG LINE

  if (!hamburger || !navLinks) {
    console.error("Hamburger or nav-links not found");
    return;
  }

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });
});
