/* =========================================================
   SPRINGFIELD LTD — MAIN SCRIPT
   ========================================================= */


/* =========================================================
   1. LOAD SHARED HEADER
   ========================================================= */

fetch("header.html")
  .then(res => res.text())
  .then(data => {

    document.getElementById("header").innerHTML = data;


    /* Mobile navigation */

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");


    if (hamburger && navLinks) {

      hamburger.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        hamburger.classList.toggle("active");

        document.body.classList.toggle("no-scroll");

      });


      /* Close mobile menu after selecting a page */

      navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

          navLinks.classList.remove("show");

          hamburger.classList.remove("active");

          document.body.classList.remove("no-scroll");

        });

      });

    }

  })
  .catch(error => {
    console.error("Unable to load header:", error);
  });



/* =========================================================
   2. LOAD SHARED FOOTER
   ========================================================= */

fetch("footer.html")
  .then(res => res.text())
  .then(data => {

    document.getElementById("footer").innerHTML = data;

  })
  .catch(error => {
    console.error("Unable to load footer:", error);
  });



/* =========================================================
   3. CONTACT FORM — DEMO MODE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const contactForm =
    document.getElementById("contact-demo-form");

  const successMessage =
    document.querySelector(".contact-v2-success");


  /*
   * The Springfield website is currently being presented
   * as a demonstration.
   *
   * No message is transmitted to an external service.
   */

  if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();


      /* Keep normal browser form validation */

      if (!contactForm.checkValidity()) {

        contactForm.reportValidity();

        return;

      }


      /* Display demo confirmation */

      if (successMessage) {

        successMessage.textContent =
          "Message received. Contact form integration will be enabled upon deployment.";

        successMessage.style.display = "block";

      }


      /* Clear submitted demo information */

      contactForm.reset();

    });

  }

});