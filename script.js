document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector(".dropdown-toggle");

        toggle.addEventListener("click", (e) => {
            e.stopPropagation();

            // Fecha os outros dropdowns abertos
            dropdowns.forEach((other) => {
                if (other !== dropdown) other.classList.remove("active");
            });

            dropdown.classList.toggle("active");
        });
    });

    // Fecha o dropdown se clicar fora dele
    document.addEventListener("click", () => {
        dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
    });
});