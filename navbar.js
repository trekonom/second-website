async function loadNavbar() {
  const navbar = `
<nav class="navbar">
  <div class="navbar-container">
    <ul class="navbar-menu">
      <li><a href="index.html" class="navbar-link" data-page="index">home</a></li>
      <li><a href="work.html" class="navbar-link" data-page="work">work</a></li>
      <li><a href="about.html" class="navbar-link" data-page="about">about</a></li>
      <li><a href="barchart.html" class="navbar-link" data-page="barchart">bar chart</a></li>
    </ul>
    <div class="navbar-logo">stefan moog</div>
    <div class="social-icons">
      <a href="https://github.com/trekonom" target="_blank" rel="noopener noreferrer" class="social-link" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/stefan-moog-75746432a" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="https://stackoverflow.com/users/12993861/stefan?tab=profile" target="_blank" rel="noopener noreferrer" class="social-link" title="Stack Overflow"><i class="fab fa-stack-overflow"></i></a>
    </div>
  </div>
</nav>`;

  const header = document.querySelector("header");
  if (!header) return;
  header.innerHTML = navbar;

  // Set active link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const pageName = currentPage.replace(".html", "").toLowerCase();
  const navLinks = header.querySelectorAll(".navbar-link");
  navLinks.forEach((link) => {
    const linkPage = (link.getAttribute("data-page") || "").toLowerCase();
    if (linkPage === pageName || (pageName === "" && linkPage === "index")) {
      link.classList.add("active");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadNavbar);
} else {
  loadNavbar();
}
