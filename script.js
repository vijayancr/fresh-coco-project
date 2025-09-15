// Show welcome message on page load
window.onload = function () {
  console.log("Welcome to Fresh Coconut Shop!");
};

// highlight active menu item while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

// default highlight for Home on load
if (navLinks.length > 0) {
  navLinks[0].classList.add("active");
}

// update active state while scrolling
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // adjust offset for header
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// instantly highlight when clicking a menu link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
