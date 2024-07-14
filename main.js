const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.getElementById('nav-toggle');
const toggleImage = document.getElementById('toggle-image');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        toggleImage.src = "images/homepage_files/close-icon.svg";
    }
    else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        toggleImage.src = "images/homepage_files/hamburger-icon.svg";
    }
})