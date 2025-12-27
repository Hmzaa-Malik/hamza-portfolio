/*=============== SHOW / HIDE MENU (MOBILE) ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU ON LINK CLICK (MOBILE) ===============*/
const navLinks = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLinks.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    const navItem = document.querySelector(
      ".nav-menu a[href*=" + sectionId + "]"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItem && navItem.classList.add("active-link");
    } else {
      navItem && navItem.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ON SCROLL ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP BUTTON ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== DARK / LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected (if user chose)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== EXPERIENCE TABS ===============*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tc) => {
      tc.classList.remove("experience-active");
    });
    target.classList.add("experience-active");

    tabs.forEach((t) => {
      t.classList.remove("experience-active");
    });
    tab.classList.add("experience-active");
  });
});

/*=============== SKILLS ACCORDION ===============*/
const skillsContent = document.getElementsByClassName("skills-content");
const skillsHeader = document.querySelectorAll(".skills-container-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }
  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
