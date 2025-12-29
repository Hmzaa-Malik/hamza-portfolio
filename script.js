/* Navbar Show */
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");

if(navToggle){ navToggle.addEventListener("click", ()=> navMenu.classList.add("show-menu")); }
if(navClose){ navClose.addEventListener("click", ()=> navMenu.classList.remove("show-menu")); }

/* Active Links on Scroll */
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", ()=>{
  sections.forEach(current =>{
    const sectionTop = current.offsetTop - 80;
    const sectionHeight = current.offsetHeight;
    const id = current.getAttribute("id");
    const link = document.querySelector('.nav-menu a[href*=' + id + ']');
    if(window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight){ link?.classList.add("active-link"); }
    else{ link?.classList.remove("active-link"); }
  });
});

/* Dark Mode */
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", ()=>{
  document.body.classList.toggle("dark-theme");
  themeButton.classList.toggle("bx-sun");
});

/* Footer Year */
document.getElementById("year").textContent = new Date().getFullYear();
