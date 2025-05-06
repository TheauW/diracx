document.addEventListener("DOMContentLoaded", function () {
  if (location.pathname.endsWith("/") || location.pathname.endsWith("/index.html")) {
    const h1 = document.querySelector(".md-content h1");
    if (h1) {
      h1.style.display = "none";
    }
  }
});
