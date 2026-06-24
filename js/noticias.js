/* ---------------------------- SCRIPT DAS NOTÍCIAS ---------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("noticias-grid");
    if (!grid) return; // só roda na página de notícias

    const loading = document.getElementById("noticias-loading");
    const erro = document.getElementById("noticias-erro");
    const botoesFiltro = document.querySelectorAll(".filtro-estado");

    // ATENÇÃO: troque pela sua chave da GNews (veja nota de segurança abaixo)
    const CURRENT_API_KEY = "PtGMTJafHOvx3hGnKpM58Cr7aPODb0P1VPH4vw_HA1svii7H";

    // Termos de busca por estado/região
    const termosBusca = {

        "centro-oeste": "Centro-Oeste", 

        "df": "Brasília",

        "go": "Goiás", 

        "mt": "Mato Grosso", 

        "ms": "Mato Grosso do Sul", 

        "politica": "governo", 

        "economia": "economia", 

        "meioAmbiente": "Cerrado", 

        "agropecuaria": "agronegócio", 

    };
    async function buscarNoticias(estado = "centro-oeste") {
        loading.style.display = "block";
        erro.style.display = "none";
        grid.innerHTML = "";

        const query = encodeURIComponent(termosBusca[estado]);
        const url = `https://api.currentsapi.services/v1/search?keywords=${query}&language=pt&apiKey=${CURRENT_API_KEY}`;
        console.log("URL FINAL:");
        console.log(url);


        try {
            const response = await fetch(url);

            if (!response.ok) {
                const erroApi = await response.json();
            
                console.error("ERRO GNEWS:", erroApi);
            
                erro.textContent =
                    erroApi.errors?.[0] ||
                    "Erro ao carregar notícias.";
            
                erro.style.display = "block";
                loading.style.display = "none";
            
                return;
            }

            const data = await response.json();
            let noticiasFiltradas = data.news;

            loading.style.display = "none";

            if (!noticiasFiltradas || noticiasFiltradas.length === 0) {
                erro.textContent = "Nenhuma notícia encontrada para essa região no momento.";
                erro.style.display = "block";
                return;
            }

            noticiasFiltradas = filtrarNoticias(
                data.news,
                estado
            );

            renderizarNoticias(noticiasFiltradas);
            
        } catch (error) {
            console.error("Erro ao buscar notícias:", error);
            loading.style.display = "none";
            erro.textContent = "Não foi possível carregar as notícias no momento.";
            erro.style.display = "block";
        }
    }

    function filtrarNoticias(artigos, estado) {

        const filtros = {

            "df": [
                "brasília",
                "brasilia",
                "distrito federal",
                "taguatinga",
                "ceilândia",
                "ceilandia",
                "samambaia",
                "planaltina",
                "gama",
                "sobradinho",
                "paranoá",
                "paranoa",
                "recanto das emas",
                "riacho fundo",
                "guará",
                "guara",
                "núcleo bandeirante",
                "nucleo bandeirante",
                "cruzeiro",
                "lago sul",
                "lago norte",
                "santa maria",
                "são sebastião",
                "sao sebastiao",
                "brazlândia",
                "brazlandia",
                "itapoã",
                "itapoa",
                "jardim botânico",
                "jardim botanico",
                "estrutural",
                "candangolândia",
                "candangolandia"
            ],

            "go": [
                "goiás",
                "goias",
                "goiânia",
                "goiania",
                "anápolis",
                "anapolis",
                "rio verde",
                "aparecida de goiânia",
                "aparecida de goiania",
                "águas lindas",
                "aguas lindas",
                "luziânia",
                "luziania",
                "valparaíso",
                "valparaiso",
                "senador canedo",
                "trindade",
                "catalão",
                "catalao",
                "jataí",
                "jatai",
                "itumbiara",
                "formosa",
                "mineiros",
                "goianésia",
                "goianesia",
                "cristalina",
                "porangatu",
                "ipameri",
                "quirinópolis",
                "quirinopolis",
                "jaraguá",
                "jaragua",
                "morrinhos",
                "caldas novas"
            ],

            "mt": [
                "mato grosso",
                "cuiabá",
                "cuiaba",
                "várzea grande",
                "varzea grande",
                "rondonópolis",
                "rondonopolis",
                "sinop",
                "sorriso",
                "tangará da serra",
                "tangara da serra",
                "primavera do leste",
                "lucas do rio verde",
                "cáceres",
                "caceres",
                "barra do garças",
                "alta floresta",
                "juína",
                "juina",
                "colíder",
                "colider",
                "diamantino",
                "campo verde",
                "pontes e lacerda",
                "nova mutum",
                "peixoto de azevedo",
                "guarantã do norte",
                "guaranta do norte",
                "aripuanã",
                "aripuana"
            ],

            "ms": [
                "mato grosso do sul",
                "ms",
                "campo grande",
                "dourados",
                "três lagoas",
                "tres lagoas",
                "corumbá",
                "corumba",
                "ponta porã",
                "ponta pora",
                "naviraí",
                "navirai",
                "nova andradina",
                "sidrolândia",
                "sidrolandia",
                "aquidauana",
                "maracaju",
                "bonito",
                "coxim",
                "paranaíba",
                "paranaiba",
                "jardim",
                "mundo novo",
                "chapadão do sul",
                "chapadao do sul",
                "cassilândia",
                "cassilandia",
                "governo de ms"
            ],

            "politica": [
                "política",
                "governo",
                "governador",
                "vice-governador",
                "prefeito",
                "prefeitura",
                "câmara",
                "câmara municipal",
                "assembleia",
                "assembleia legislativa",
                "deputado",
                "deputada",
                "senador",
                "senadora",
                "senado",
                "vereador",
                "vereadora",
                "eleição",
                "eleitoral",
                "partido",
                "congresso",
                "ministério",
                "gestão pública",
                "licitação",
                "licitações",
                "orçamento",
                "orçamento público",
                "secretaria",
                "secretário",
                "secretária",
                "administração pública",
                "tribunal regional eleitoral",
                "TRE",
                "campanha eleitoral",
                "votação",
                "mandato",
                "plenário",
                "projeto de lei",
                "reforma administrativa"
            ],

            "economia": [
                "economia",
                "mercado",
                "emprego",
                "investimento",
                "investimentos",
                "negócio",
                "negócios",
                "empresa",
                "empresas",
                "comércio",
                "varejo",
                "indústria",
                "industrial",
                "exportação",
                "importação",
                "inflação",
                "juros",
                "banco",
                "crédito",
                "finanças",
                "financeiro",
                "empreendedor",
                "empreendedorismo",
                "startup",
                "microempresa",
                "MEI",
                "agronegócio",
                "PIB",
                "arrecadação",
                "tributação",
                "tributo",
                "imposto",
                "receita",
                "bolsa",
                "mercado financeiro",
                "desemprego",
                "renda",
                "salário",
                "salario",
                "franquia",
                "investidor"
            ],

            "meioAmbiente": [
                "pantanal",
                "cerrado",
                "amazônia",
                "amazonia",
                "meio ambiente",
                "ambiental",
                "clima",
                "mudanças climáticas",
                "aquecimento global",
                "biodiversidade",
                "fauna",
                "flora",
                "preservação",
                "conservação",
                "queimada",
                "incêndio florestal",
                "incendio florestal",
                "desmatamento",
                "sustentabilidade",
                "poluição",
                "rio",
                "nascente",
                "seca",
                "estiagem",
                "chuva",
                "temperatura",
                "unidade de conservação",
                "reserva ambiental",
                "parque nacional",
                "parque estadual",
                "recurso hídrico",
                "recurso hidrico",
                "crise hídrica",
                "crise hidrica",
                "ecologia",
                "animal silvestre",
                "espécie ameaçada",
                "especie ameacada"
            ],

            "agropecuaria": [
                "agronegócio",
                "agronegocio",
                "agro",
                "agricultura",
                "pecuária",
                "pecuaria",
                "pecuarista",
                "gado",
                "boi",
                "bovino",
                "soja",
                "milho",
                "algodão",
                "algodao",
                "safra",
                "colheita",
                "produtor rural",
                "fazenda",
                "frigorífico",
                "frigorifico",
                "exportação",
                "cooperativa",
                "plantio",
                "rebanho",
                "avicultura",
                "suinocultura",
                "cana-de-açúcar",
                "cana de açucar",
                "fertilizante",
                "insumo agrícola",
                "insumo agricola",
                "armazenagem",
                "logística agrícola",
                "logistica agricola",
                "confinamento",
                "arroba do boi",
                "agroindústria",
                "agroindustria",
                "produtividade rural",
                "colheita recorde"
            ]
        };

        if (!filtros[estado]) {
            return artigos;
        }

        return artigos.filter(artigo => {

            const texto = `
                ${artigo.title || ""}
                ${artigo.description || ""}
                ${(artigo.category || []).join(" ")}
            `.toLowerCase();

            return filtros[estado].some(
                palavra => texto.includes(palavra.toLowerCase())
            );

        });
    }

    function renderizarNoticias(artigos) {
        grid.innerHTML = "";

        artigos.forEach((artigo) => {
            const card = document.createElement("a");
            card.classList.add("noticia-card");
            card.href = artigo.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.style.textDecoration = "none";
            card.style.color = "inherit";

            const dataFormatada = formatarData(artigo.published);

            card.innerHTML = `
                <img src="${artigo.image || ''}" alt="${artigo.title}" onerror="this.style.display='none'">
                <div class="noticia-conteudo">
                    <span class="noticia-fonte">${artigo.author || "Fonte desconhecida"}</span>
                    <h3 class="noticia-titulo">${artigo.title}</h3>
                    <p class="noticia-resumo">${artigo.description || ""}</p>
                    <span class="noticia-data">${dataFormatada}</span>
                </div>
            `;

            grid.appendChild(card);
        });
    }

    function formatarData(dataISO) {
        if (!dataISO) return "";
        const data = new Date(dataISO);
        return data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    }

    // ----- Filtro por estado -----
    botoesFiltro.forEach((botao) => {
        botao.addEventListener("click", () => {
            botoesFiltro.forEach((b) => b.classList.remove("active"));
            botao.classList.add("active");

            const estado = botao.dataset.estado;
            buscarNoticias(estado);
        });
    });

    // ----- Carrega notícias da região inteira ao abrir a página -----
    buscarNoticias("centro-oeste");
});