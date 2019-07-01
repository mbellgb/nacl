const menuButton = document.querySelector('span.menu-button');
const navElement = document.querySelector('nav');

menuButton.addEventListener("click", () => {
    navElement.classList.toggle("closed");
})
