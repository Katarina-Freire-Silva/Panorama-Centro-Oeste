/* ------------------------------ SCRIPT DA HOME -------------------------------*/

const video = document.getElementById("video-home");

if (video) {

    video.addEventListener("loadeddata", () => {
        video.currentTime = 5;
        video.play();
    });

    video.addEventListener("timeupdate", () => {
        if (video.currentTime >= 105) {
            video.currentTime = 5;
        }
    });

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;
        const scale = 1 + (scroll * 0.0004);

        video.style.transform = `scale(${scale})`;

    });

}

/* ------------------------- SCRIPT DA HOME - HISTÓRIA -------------------------*/

const slidesHistoria = document.querySelectorAll(".historia-slide");
const btnProximo = document.querySelector(".historia-proximo");
const btnAnterior = document.querySelector(".historia-anterior");
const indicadores = document.querySelector(".historia-indicadores");

if(slidesHistoria.length){

    let atual = 0;

    slidesHistoria.forEach((_, index) => {

        const ponto = document.createElement("div");

        ponto.classList.add("historia-ponto");

        if(index === 0){
            ponto.classList.add("ativo");
        }

        ponto.addEventListener("click", () => {
            mostrarSlide(index);
        });

        indicadores.appendChild(ponto);

    });

    const pontos = document.querySelectorAll(".historia-ponto");

    function mostrarSlide(indice){

        slidesHistoria[atual].classList.remove("ativo");
        pontos[atual].classList.remove("ativo");

        atual = indice;

        slidesHistoria[atual].classList.add("ativo");
        pontos[atual].classList.add("ativo");

    }

    btnProximo.addEventListener("click", () => {

        let proximo = atual + 1;

        if(proximo >= slidesHistoria.length){
            proximo = 0;
        }

        mostrarSlide(proximo);

    });

    btnAnterior.addEventListener("click", () => {

        let anterior = atual - 1;

        if(anterior < 0){
            anterior = slidesHistoria.length - 1;
        }

        mostrarSlide(anterior);

    });

}



