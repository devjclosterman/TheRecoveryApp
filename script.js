function getSupport() {
  alert("Live counselor chat coming soon! For now, call 1-800-662-HELP for support.");
}


// universal header/footer code for all html pages
// Highlight active page link
function setActiveLink() {
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");

  // Run after short delay so header is loaded
  setTimeout(setActiveLink, 200);
});
