document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");

  if (!hamburger) {
    alert("Hamburger NOT found");
    return;
  }

  hamburger.addEventListener("click", function () {
    alert("Hamburger CLICKED");
  });
});
