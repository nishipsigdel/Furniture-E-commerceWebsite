const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const menuButtonIcon = menuButton.querySelector("i");

menuButton.addEventListener("click", (e) => {
  navLinks.classList.toggle("navLinksOpen");

  const isOpen = navLinks.classList.contains("navLinksOpen");
  menuButtonIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("navLinksOpen");
  menuButtonIcon.setAttribute("class", "ri-menu-line");
});


const navSearch = document.getElementById("navSearch")

navSearch.addEventListener("click", (e)=>{
    navSearch.classList.toggle("navSearchOpen");
});

const scrollRevealOptions = {
    distance:"50px",
    origin:"bottom",
    duration:"1000",
};

ScrollReveal().reveal(".headerImage img", {
    ...scrollRevealOptions,
    origin:"right",
})

ScrollReveal().reveal(".headerContent div", {
    ...scrollRevealOptions,
    duration:1000,
    delay: 500,
});

ScrollReveal().reveal(".headerContent h1", {
    ...scrollRevealOptions,
    delay: 100,
});

ScrollReveal().reveal(".headerContent p", {
    ...scrollRevealOptions,
    delay: 800,
});

ScrollReveal().reveal(".dealsCard", {
    ...scrollRevealOptions,
    interval: 500,
});

ScrollReveal().reveal(".aboutImage img", {
    ...scrollRevealOptions,
    origin:"right",
})

ScrollReveal().reveal(".aboutCard", {
    ...scrollRevealOptions,
    duration: 1000,
    interval: 500,
    delay: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,
})