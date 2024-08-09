const burger = document.querySelector(".hamburger");
const burgerLinks = document.querySelector(".burger-links");



burger.addEventListener("click", () => {
    const visibility = burgerLinks.getAttribute('data-visible');
    burger.classList.toggle("active");
    burgerLinks.classList.toggle("active");
        if (visibility === "true") {
            burgerLinks.setAttribute('data-visible', "false");
        }
        else {
            burgerLinks.setAttribute('data-visible', "true");
        }

})