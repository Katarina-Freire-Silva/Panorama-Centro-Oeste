
/* ----------------- SCRIPT Geral para o site do Centro-Oeste -----------------*/

document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector(".dropdown-toggle");

        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdowns.forEach((other) => {
                if (other !== dropdown) other.classList.remove("active");
            });
            dropdown.classList.toggle("active");
        });
    });

    document.addEventListener("click", () => {
        dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    });

    // ===== NOVO: marca o dropdown da página atual como ativo =====
// ===== marca o dropdown da página atual como ativo =====
    const paginaAtual = window.location.pathname;

    dropdowns.forEach((dropdown) => {
        const links = dropdown.querySelectorAll(".dropdown-menu a");
        links.forEach((link) => {
            const hrefPath = link.getAttribute("href").split("#")[0];

            if (hrefPath && paginaAtual.endsWith(hrefPath.replace("./", "").replace("../", ""))){
                dropdown.classList.add("pagina-atual"); // só gira a seta, não abre o menu
            }
        });
    });
});

