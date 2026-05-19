(function () {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const form = document.getElementById("appointmentForm");
  const formNote = document.getElementById("formNote");

  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  navToggle.addEventListener("click", function () {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
    document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );
  revealEls.forEach(function (el) {
    observer.observe(el);
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formNote.textContent =
        "Thank you! Our team will contact you shortly to confirm your appointment.";
      formNote.classList.add("success");
      form.reset();
      setTimeout(function () {
        formNote.textContent = "";
        formNote.classList.remove("success");
      }, 6000);
    });
  }
})();
