const menuButton = document.querySelector('span.menu-button');
const navElement = document.querySelector('nav');

menuButton.addEventListener("click", () => {
    navElement.classList.toggle("closed");
})

document.querySelector('form#gripe-form').addEventListener("submit", (e) => {
    e.preventDefault();
    const gripeTextEl = document.querySelector('input#gripe-input');
    const gripe = gripeTextEl.value;
    const errorEl =document.querySelector('span#gripe-error');
    if (gripe.length === 0) {
        errorEl.innerHTML = `You need to enter a gripe.`;
        gripeTextEl.setAttribute("aria-invalid", "true");
        gripeTextEl.setAttribute("aria-describedby", "gripe-error");
        errorEl.removeAttribute("aria-hidden");
        errorEl.classList.remove("hidden");
    }

    const url = `https://github.com/mbellgb/nacl/issues/new?template=episode-proposal.md&title=${gripe}`;
    window.location.replace(url);
})
