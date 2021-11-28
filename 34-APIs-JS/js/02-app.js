document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("Ya está visible");
    } else {
      console.log("Dejó de ser visible");
    }
  });

  observer.observe(document.querySelector(".premium"));
});
