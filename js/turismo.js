/* ---------------------------- SCRIPT DO TURISMO -----------------------------*/

let localUsuario = null;

// ===== MAPA INTERATIVO (Leaflet) =====
document.addEventListener("DOMContentLoaded", () => {
    const mapElement = document.getElementById("map");
    if (!mapElement) return; // só executa nas páginas que têm o mapa

    // Posição inicial: centro da região Centro-Oeste
    const map = L.map("map").setView([-15.7801, -47.9292], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let currentMarker = null;

    function irParaLocal(lat, lng, zoom, popupText) {
        map.setView([lat, lng], zoom);

        if (currentMarker) {
            map.removeLayer(currentMarker);
        }

        currentMarker = L.marker([lat, lng]).addTo(map);
        if (popupText) {
            currentMarker.bindPopup(popupText).openPopup();
        }
    }

    // ===== Cards de destinos pré-prontos =====
    const cards = document.querySelectorAll(".destino-card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const lat = parseFloat(card.dataset.lat);
            const lng = parseFloat(card.dataset.lng);
            const zoom = parseInt(card.dataset.zoom) || 13;
            const titulo = card.querySelector("h4").textContent;

            let textoPopup = titulo;

            if(localUsuario){

                const distancia = calcularDistancia(
                    localUsuario.lat,
                    localUsuario.lng,
                    lat,
                    lng
                );

                textoPopup = `
                    <strong>${titulo}</strong><br>
                    Distância da sua região:<br>
                    ${distancia.toFixed(0)} km
                `;
            }

            irParaLocal(lat, lng, zoom, textoPopup);

            // Marca visualmente o card selecionado
            cards.forEach((c) => c.classList.remove("active"));
            card.classList.add("active");
        });
    });

    // ===== Barra de busca (usando Nominatim - geocoding gratuito do OSM) =====
    const searchInput = document.getElementById("map-search-input");
    const searchBtn = document.getElementById("map-search-btn");

    async function buscarLocal() {
        
        const query = searchInput.value.trim();
        if (!query) return;

        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
            );
            const data = await response.json();
            

            if (data.length === 0) {
                alert("Local não encontrado. Tente buscar de outra forma.");
                return;
            }

            const lat = parseFloat(data[0].lat);
            const lng = parseFloat(data[0].lon);
            localUsuario = {
                lat,
                lng,
                nome: data[0].display_name
            };

            irParaLocal(lat, lng, 13, data[0].display_name);

            function calcularDistancia(lat1, lon1, lat2, lon2) {

                const R = 6371;

                const dLat = (lat2 - lat1) * Math.PI / 180;
                const dLon = (lon2 - lon1) * Math.PI / 180;

                const a =
                    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(lat1 * Math.PI / 180) *
                    Math.cos(lat2 * Math.PI / 180) *
                    Math.sin(dLon / 2) *
                    Math.sin(dLon / 2);

                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                return R * c;
            }

            // Remove destaque de cards ao buscar manualmente
            cards.forEach((c) => c.classList.remove("active"));

        } catch (error) {
            console.error("Erro ao buscar local:", error);
            alert("Erro ao buscar local. Tente novamente.");
        }
    }

    searchBtn.addEventListener("click", buscarLocal);
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") buscarLocal();
    });
});

const grid = document.querySelector(".destinos-grid");
const btnProximoDestino = document.querySelector(".destino-proximo");
const btnAnteriorDestino = document.querySelector(".destino-anterior");

if (grid && btnProximoDestino && btnAnteriorDestino) {

    btnProximoDestino.onclick = () => {
        grid.scrollBy({
            left: 340,
            behavior: "smooth"
        });
    };

    btnAnteriorDestino.onclick = () => {
        grid.scrollBy({
            left: -340,
            behavior: "smooth"
        });
    };

}

/* ---------------- HOSPEDAGEM INTERATIVA ---------------- */

document.addEventListener("DOMContentLoaded", () => {

    const imagens = {
        DF: document.getElementById("imagemDF"),
        GO: document.getElementById("imagemGO"),
        MT: document.getElementById("imagemMT"),
        MS: document.getElementById("imagemMS")
    };

    const cardsHotel = document.querySelectorAll(".hotel-card");

    cardsHotel.forEach(card => {

        card.addEventListener("click", () => {

            const estadoContainer = card.closest(".estado-hospedagem");
            const estado = estadoContainer.dataset.estado;

            const imagem = imagens[estado];

            /* -------- ACORDEÃO -------- */

            const estavaAberto = card.classList.contains("aberto");

            estadoContainer
                .querySelectorAll(".hotel-card")
                .forEach(c => c.classList.remove("aberto"));

            if (!estavaAberto) {
                card.classList.add("aberto");
                setTimeout(() => {
                    card.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });
                }, 200);
            }

            /* -------- TROCA DE IMAGEM -------- */

            if (!imagem) return;

            estadoContainer
                .querySelectorAll(".hotel-card")
                .forEach(c => c.classList.remove("ativo"));

            card.classList.add("ativo");

            imagem.style.opacity = "0";

            setTimeout(() => {

                imagem.src = card.dataset.img;

                imagem.style.opacity = "1";

            }, 250);

        });
    });

});

/* ---------------- VER MAIS DESTINOS ---------------- */

document.addEventListener("DOMContentLoaded", () => {

    const btnVerMais = document.getElementById("btnVerMais");
    const destinosGrid = document.querySelector(".destinos-grid");
    const destinosContainer = document.querySelector(".destinos-container");

    if (!btnVerMais || !destinosGrid || !destinosContainer) return;

    let expandido = false;

    btnVerMais.addEventListener("click", () => {

        expandido = !expandido;

        destinosGrid.classList.toggle("expandido");
        destinosContainer.classList.toggle("expandido");

        btnVerMais.textContent = expandido
            ? "Ver menos destinos"
            : "Ver mais destinos";

    });

});
