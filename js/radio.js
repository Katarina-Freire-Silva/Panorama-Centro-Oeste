/* ----------------------------- SCRIPT DO RÁDIO ------------------------------*/

// ===== BANCO DE MÚSICAS (compartilhado entre todas as páginas) =====
const musicas = [
    { titulo: "É o Amor", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---É-o-Amor.mp3" },
    { titulo: "Entre Ele e Eu", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Entre-Ele-e-Eu.mp3" },
    { titulo: "Rédeas do Possante", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Rédeas-do-Possante.mp3" },
    { titulo: "Deus", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Deus.mp3" },
    { titulo: "A Estrela Só", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---A-Estrela-Só.mp3" },
    { titulo: "Pouco a Pouco", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Pouco-a-Pouco.mp3" },
    { titulo: "Águas Passadas", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Águas-Passadas.mp3" },
    { titulo: "Eu Te Amo", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Eu-Te-Amo.mp3" },
    { titulo: "Quem Sou Eu Sem Ela", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Quem-Sou-Eu-Sem-Ela.mp3" },
    { titulo: "Para Desbotar a Saudade", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Para-Desbotar-a-Saudade.mp3" },
    { titulo: "Coração Está em Pedaços", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Coração-Está-em-Pedaços.mp3" },
    { titulo: "Dois Corações e uma História", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: ".ZL---Dois-Corações-e-uma-História.mp3" },
    { titulo: "Pra Não Pensar em Você", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Pra-Não-Pensar-em-Você.mp3" },
    { titulo: "Pra Mudar a Minha Vida", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Pra-Mudar-a-Minha-Vida.mp3" },
    { titulo: "Preciso Ser Amado", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Preciso-Ser-Amado.mp3" },
    { titulo: "Saudade Bandida", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Saudade-Bandida.mp3" },
    { titulo: "Você Vai Ver", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Você-Vai-Ver.mp3" },
    { titulo: "Cada Volta é um Recomeço", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Cada-Volta-é-um-Recomeço.mp3" },
    { titulo: "Irmão da Lua Amigo das Estrelas", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Irmão-da-Lua-Amigo-das-Estrelas.mp3" },
    { titulo: "Antes de Voltar Pra Casa", artista: "Zezé Di Camargo & Luciano", ano: 1991, arquivo: "ZL---Antes-de-Voltar-Pra-Casa.mp3" },

    { titulo: "Cade Você", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Cade-Você.mp3" },
    { titulo: "Talvez Você Se Lembre", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Talvez-Você-Se-Lembre.mp3" },
    { titulo: "O Cheiro da Maça", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---O-Cheiro-da-Maça.mp3" },
    { titulo: "Coração Quer Te Encontrar", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Coração-Quer-Te-Encontrar.mp3" },
    { titulo: "Mais uma Vez Sozinho (Marcas do Amor)", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Mais-uma-Vez-Sozinho-(Marcas-do-Amor).mp3" },
    { titulo: "Pra Nunca Dizer Adeus", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Pra-Nunca-Dizer-Adeus.mp3" },
    { titulo: "Pense em Mim", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Pense-em-Mim.mp3" },
    { titulo: "Só Fazendo Amor", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Só-Fazendo-Amor.mp3" },
    { titulo: "Você Ainda Vai Voltar", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Você-Ainda-Vai-Voltar.mp3" },
    { titulo: "Desculpe Mas Eu Vou Chorar", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Desculpe-Mas-Eu-Vou-Chorar.mp3" },
    { titulo: "É Por Você Que Canto", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---É-Por-Você-Que-Canto.mp3" },
    { titulo: "Entre Tapas e Beijos", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Entre-Tapas-e-Beijos.mp3" },
    { titulo: "Talismã", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Talismã.mp3" },
    { titulo: "Sonho Por Sonho", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Sonho-Por-Sonho.mp3" },
    { titulo: "Não Aprendi a Dizer Adeus", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Não-Aprendia-Dizer-Adeus.mp3" },
    { titulo: "Não Olhe Assim", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Não-Olhe-Assim.mp3" },
    { titulo: "Paz Na Cama", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Paz-Na-Cama.mp3" },
    { titulo: "O Que Eu Sinto é Amor", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---O Que-Eu-Sinto-é-Amor.mp3" },
    { titulo: "Temporal de Amor", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Temporal-de-Amor.mp3" },
    { titulo: "Dor de Amor Não Tem Jeito", artista: "Leandro e Leonardo", ano: 1990, arquivo: "LL---Dor-de-Amor-Não-Tem-Jeito.mp3" },


    { titulo: "Logo Eu", artista: "Jorge e Mateus", ano: 2021, arquivo: "JM---Logo-Eu.mp3" },
    { titulo: "Molhando o Volante", artista: "Jorge e Mateus", ano: 2021, arquivo: "JM---Molhando-o-Volante.mp3" },
    { titulo: "Troca", artista: "Jorge e Mateus", ano: 2021, arquivo: "JM---Troca.mp3" },
    { titulo: "Duas Metades", artista: "Jorge e Mateus", ano: 2012, arquivo: "JM---Duas-Metades.mp3" },
    { titulo: "Tem Que Sorrir", artista: "Jorge e Mateus", ano: 2021, arquivo: "JM---Tem-Que-Sorrir.mp3" },
    { titulo: "Namorando Com Saudade", artista: "Jorge e Mateus", ano: 2021, arquivo: "JM---Namorando-Com-Saudade.mp3" },
    { titulo: "Paradigmas", artista: "Jorge e Mateus", ano: 2021, arquivo: "JM---Paradigmas.mp3" },
    { titulo: "Namora Eu Aí", artista: "Jorge e Mateus", ano: 2021, arquivo: "JM---Namora-Eu-Aí.mp3" },
    { titulo: "A Gente Nem Ficou", artista: "Jorge e Mateus", ano: 2012, arquivo: "JM---A-Gente-Nem-Ficou.mp3" },
    { titulo: "Louca de Saudade", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Louca-de-Saudade.mp3" },
    { titulo: "De Tanto Te Querer", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---De-Tanto-Te-Querer.mp3" },
    { titulo: "Seu Astral", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Seu-Astral.mp3" },
    { titulo: "Se Eu Pedir Se Volta", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Se-Eu-Pedir-Se-Volta.mp3" },
    { titulo: "Pirraça", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Pirraça.mp3" },
    { titulo: "Vestígios", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Vestígios.mp3" },
    { titulo: "Um Dia Te Levo Comigo", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Um-Dia-Te-Levo-Comigo.mp3" },
    { titulo: "Pode Chorar", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Pode-Chorar.mp3" },
    { titulo: "Tempo a Tempo", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Tempo-a-Tempo.mp3" },
    { titulo: "Amo Noite e Dia", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Amo-Noite-e-Dia.mp3" },
    { titulo: "Se Eu Chorar", artista: "Jorge e Mateus", ano: 2016, arquivo: "JM---Se-Eu-Chorar.mp3" },


    { titulo: "Te Amo Demais", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Te-amo-Demais.mp3" },
    { titulo: "Leão", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Leão.mp3" },
    { titulo: "Me Ame Mais", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Me-Ame-Mais.mp3" },
    { titulo: "Hackearam-me", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Hackearam-me.mp3" },
    { titulo: "Não Era Pra Ser Assim", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Não-Era-Pra-Ser-Assim.mp3" },
    { titulo: "Pra Falar a Verdade", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Pra-Falar-a-Verdade.mp3" },
    { titulo: "Café da Manhã", artista: "Marília Mendonça", ano: 2022, arquivo: "MM---Café-da-Manhã.mp3" },
    { titulo: "Morango do Nordeste", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Morango-do-Nordeste.mp3" },
    { titulo: "O Que Falta Em Você Sou Eu", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---O-Que-Falta-Em-Você-Sou-Eu.mp3" },
    { titulo: "Troca de Calçada", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Troca-de-Calçada.mp3" },
    { titulo: "Essas Nossas Brigas", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Essas-Nossas-Brigas.mp3" },
    { titulo: "Entre Quatro Paredes", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Entre-Quatro-Paredes.mp3" },
    { titulo: "Quatro e Quinze", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Quatro-e-Quinze.mp3" },
    { titulo: "Esse Cara Aqui Do Lado", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Esse-Cara-Aqui-Do-Lado.mp3" },
    { titulo: "Me Desculpe Mas Eu Sou Fiel", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Me-Desculpe-Mas-Eu-Sou-Fiel.mp3" },
    { titulo: "Sentimento Louco", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Sentimento-Louco.mp3" },
    { titulo: "O Que é AMor Pra Você", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---O-Que-é-AMor-Pra-Você.mp3" },
    { titulo: "Silêncio", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Silêncio.mp3" },
    { titulo: "Infiel", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Infiel.mp3" },
    { titulo: "Bem Pior Que Eu", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Bem-Pior-Que-Eu.mp3" },
    { titulo: "Bebi Liguei", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Bebi-Liguei.mp3" },
    { titulo: "Você Não é Mais Assim", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Você-Não-é-Mais-Assim.mp3" },
    { titulo: "Bebaça", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Bebaça.mp3" },
    { titulo: "Muito Estranho", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Muito-Estranho.mp3" },
    { titulo: "Todo Mundo Vai Sofrer", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Todo-Mundo-Vai-Sofrer.mp3" },
    { titulo: "Eu Sei De Cor", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Eu-Sei-De-Cor.mp3" },
    { titulo: "Supera", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Supera.mp3" },
    { titulo: "Graveto", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Graveto.mp3" },
    { titulo: "Ciumeira", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Ciumeira.mp3" },
    { titulo: "Sem sal", artista: "Marília Mendonça", ano: 2023, arquivo: "MM---Sem-Sal.mp3" },


    { titulo: "Flor E O Beija-Flor", artista: "Henrique e Juliano", ano: 2016, arquivo: "HJ---Flor-E-O-Beija-Flor.mp3" },
    { titulo: "Garçon Fecha o bar", artista: "Henrique e Juliano", ano: 2014, arquivo: "HJ---Garçon-Fecha-o-bar.mp3" },
    { titulo: "Na Hora Da Raiva", artista: "Henrique e Juliano", ano: 2017, arquivo: ".HJ---Na-Hora-Da-Raiva.mp3" },
    { titulo: "Não To Valendo Nada", artista: "Henrique e Juliano", ano: 2014, arquivo: "HJ---Não-To-Valendo-Nada.mp3" },
    { titulo: "Cuida Bem Dela", artista: "Henrique e Juliano", ano: 2014, arquivo: "HJ---Cuida-Bem-Dela.mp3" },
    { titulo: "Até Você Voltar", artista: "Henrique e Juliano", ano: 2014, arquivo: "HJ---Até-Você-Voltar.mp3" },
    { titulo: "As vezes", artista: "Henrique e Juliano", ano: 2015, arquivo: "HJ---As-vezes.mp3" },
    { titulo: "Recaídas", artista: "Henrique e Juliano", ano: 2013, arquivo: "HJ---Recaídas.mp3" },
    { titulo: "Mudando De Assunto", artista: "Henrique e Juliano", ano: 2015, arquivo: "HJ---Mudando-De-Assunto.mp3" },
    { titulo: "Aquela Pessoa", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Aquela-Pessoa.mp3" },
    { titulo: "Cê Me Conhece Eu Me Conheço", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Cê-Me-Conhece-Eu-Me-Conheço.mp3" },
    { titulo: "Vai Com Calma", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Vai-Com-Calma.mp3" },
    { titulo: "Ainda Voltava", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Ainda-Voltava.mp3" },
    { titulo: "Romântico", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Romântico.mp3" },
    { titulo: "Última Saudade", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Última-Saudade.mp3" },
    { titulo: "Seja Ex", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Seja-Ex.mp3" },
    { titulo: "Alguma Coisa", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Alguma-Coisa.mp3" },
    { titulo: "Meia Metade", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Meia-Metade.mp3" },
    { titulo: "Arranhão", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Arranhão.mp3" },
    { titulo: "Liberdade Provisória", artista: "Henrique e Juliano", ano: 2017, arquivo: "HJ---Liberdade-Provisória.mp3" },


    { titulo: "Narcisista", artista: "Maiara e Maraisa", ano: 2023, arquivo: "MM---Narcisista.mp3" },
    { titulo: "Melhor Terminar", artista: "Maiara e Maraisa", ano: 2023, arquivo: "MM---Melhor-Terminar.mp3" },
    { titulo: "Saudade do Tipo", artista: "Maiara e Maraisa", ano: 2023, arquivo: "MM---Saudade-do-Tipo.mp3" },
    { titulo: "Todo Mundo Menos Você", artista: "Maiara e Maraisa", ano: 2022, arquivo: "MM---Todo-Mundo-Menos-Você.mp3" },
    { titulo: "Medo Bobo", artista: "Maiara e Maraisa", ano: 2015, arquivo: "MM---Medo-Bobo.mp3" },
    { titulo: "Amando o Inimigo", artista: "Maiara e Maraisa", ano: 2023, arquivo: "MM---Amando-o-Inimigo.mp3" },
    { titulo: "Surtos", artista: "Maiara e Maraisa", ano: 2023, arquivo: "MM---Surtos.mp3" },
    { titulo: "Esqueça-me Se For Capaz", artista: "Maiara e Maraisa", ano: 2023, arquivo: "MM---Esqueça-me-Se-For-Capaz.mp3" },
    { titulo: "Quero do Jeito Que Você Quiser", artista: "Maiara e Maraisa", ano: 2016, arquivo: "MM---Quero-do-Jeito-Que-Você-Quiser.mp3" },
    { titulo: "Eu Sou Ela", artista: "Maiara e Maraisa", ano: 2018, arquivo: "MM---Eu-Sou-Ela.mp3" },

    { titulo: "Um Rei", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---Um-Rei.mp3" },
    { titulo: "Vereda Tropical", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---Vereda-Tropical.mp3" },
    { titulo: "Tico-Tico No Fubá", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---Tico-Tico-No-Fubá.mp3" },
    { titulo: "A Cor do Desejo", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---A-Cor-do-Desejo.mp3" },
    { titulo: "Seu Tipo", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---Seu-Tipo.mp3" },
    { titulo: "Belíssima", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---Belíssima.mp3" },
    { titulo: "Sangue Latino", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---Sangue-Latino.mp3" },
    { titulo: "Samba Rasgado", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---Samba-Rasgado.mp3" },
    { titulo: "Viajante", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---Viajante.mp3" },
    { titulo: "Homem Com H", artista: "Ney Matogrosso", ano: 1987, arquivo: "NM---Homem-Com-H.mp3" },

    { titulo: "Amanheceu Peguei a Viola", artista: "Almir Sater", ano: 1990, arquivo: "AS---Amanheceu-Peguei-a-Viola.mp3" },
    { titulo: "Ando Devagar", artista: "Almir Sater", ano: 1990, arquivo: "AS---Ando-Devagar.mp3" },
    { titulo: "Brasil Poeira", artista: "Almir Sater", ano: 1990, arquivo: "AS---Brasil-Poeira.mp3" },
    { titulo: "Boi de Piranha", artista: "Almir Sater", ano: 1990, arquivo: "AS---Boi-de-Piranha.mp3" },
    { titulo: "Boiada", artista: "Almir Sater", ano: 1990, arquivo: "AS---Boiada.mp3" },
    { titulo: "Caminhos Me Levem", artista: "Almir Sater", ano: 1990, arquivo: "AS---Caminhos-Me-Levem.mp3" },
    { titulo: "Cavaleiro da Lua", artista: "Almir Sater", ano: 1990, arquivo: "AS---Cavaleiro-da-Lua.mp3" },
    { titulo: "Corumba", artista: "Almir Sater", ano: 1990, arquivo: "AS---Corumba.mp3" },
    { titulo: "Flor do Amor", artista: "Almir Sater", ano: 1990, arquivo: "AS---Flor-do-Amor.mp3" },
    { titulo: "Lamento Sertanejo", artista: "Almir Sater", ano: 1990, arquivo: "AS---Lamento-Sertanejo.mp3" },
    { titulo: "Luzeiro", artista: "Almir Sater", ano: 1990, arquivo: "AS---Luzeiro.mp3" },
    { titulo: "Minas Gerais", artista: "Almir Sater", ano: 1990, arquivo: "AS---Minas-Gerais.mp3" },
    { titulo: "Peão", artista: "Almir Sater", ano: 1990, arquivo: "AS---Peão.mp3" },
    { titulo: "Rasta Bonito", artista: "Almir Sater", ano: 1990, arquivo: "AS---Rasta-Bonito.mp3" },
    { titulo: "Sabor das Manhãs", artista: "Almir Sater", ano: 1990, arquivo: "AS---Sabor-das-Manhãs.mp3" },
    { titulo: "Trem do Pantanal", artista: "Almir Sater", ano: 1990, arquivo: "AS---Trem-do-Pantanal.mp3" },
    { titulo: "Senhores da Terra", artista: "Almir Sater", ano: 1990, arquivo: "AS---Senhores-da-Terra.mp3" },
    { titulo: "Hora do Clarão", artista: "Almir Sater", ano: 1990, arquivo: "AS---Hora-do-Clarão.mp3" },
    { titulo: "Missões Naturais", artista: "Almir Sater", ano: 1990, arquivo: "AS---Missões-Naturais.mp3" },
    { titulo: "Travessia do Rio Araguaia", artista: "Almir Sater", ano: 1990, arquivo: "AS---Travessia-do-Rio-Araguaia.mp3" }
];

// ===== PLAYER GLOBAL (roda em TODAS as páginas do site) =====
document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audio-player");
    if (!audioPlayer) return;

    const disco = document.getElementById("disco");


    audioPlayer.addEventListener("play", () => {
        atualizarIconePlay(true);

        if (disco) {
            disco.classList.add("tocando");
        }
    });


    audioPlayer.addEventListener("pause", () => {
        atualizarIconePlay(false);

        if (disco) {
            disco.classList.remove("tocando");
        }
    });

    const CHAVE_INDICE = "radio_indiceAtual";
    const CHAVE_TEMPO = "radio_tempoAtual";

    // ----- Elementos da interface (só existem na página radio.html) -----
    const infoTitulo = document.getElementById("info-titulo");
    const infoArtista = document.getElementById("info-artista");
    const infoAno = document.getElementById("info-ano");
    const fixoTitulo = document.getElementById("fixo-titulo");
    const fixoArtista = document.getElementById("fixo-artista");

    const btnPlay = document.getElementById("btn-play");
    const btnAnterior = document.getElementById("btn-anterior");
    const btnProximo = document.getElementById("btn-proximo");

    const progressBar = document.getElementById("progress-bar");
    const tempoAtual = document.getElementById("tempo-atual");
    const tempoTotal = document.getElementById("tempo-total");

    const volumeSlider = document.getElementById("volume");

    const filtroArtista = document.getElementById("filtro-artista");
    const filtroAno = document.getElementById("filtro-ano");
    const btnFiltrar = document.getElementById("btn-filtrar");
    const listaMusicas = document.getElementById("lista-musicas");

    const temInterfaceRadio = !!disco; // true só na página radio.html

    let listaAtual = [...musicas]; // lista em uso (pode ser filtrada)

    // ----- Sorteia um índice diferente do atual -----
    function sortearIndice(indiceAtualEvitar){
        if (musicas.length === 1) return 0;
        let novoIndice;
        do {
            novoIndice = Math.floor(Math.random() * musicas.length);
        } while (novoIndice === indiceAtualEvitar);
        return novoIndice;
    }

    // ----- Atualiza a interface visual (disco, textos, lista) -----
    function atualizarInterface(musica){
        if (!temInterfaceRadio) return;

        infoTitulo.textContent = musica.titulo;
        infoArtista.textContent = `- ${musica.artista}`;
        infoAno.textContent = `(${musica.ano})`;

        if (fixoTitulo) {
            fixoTitulo.textContent = musica.titulo;
        }

        if (fixoArtista) {
            fixoArtista.textContent = musica.artista;
        }

        disco.classList.add("tocando");
        atualizarIconePlay(true);
        const itens = listaMusicas.querySelectorAll("li");
        itens.forEach(li => li.classList.remove("tocando-agora"));
        const itemAtual = [...itens].find(li => li.textContent.includes(musica.titulo));
        if (itemAtual) itemAtual.classList.add("tocando-agora");
    }

    // ----- Troca o ícone do botão de play/pause -----
    function atualizarIconePlay(tocando){
        if (!btnPlay) return;
        const icone = btnPlay.querySelector(".material-symbols-outlined");
        if (icone) {
            icone.textContent = tocando ? "pause" : "play_arrow";
        }
    }

    function obterCaminhoMusica(nomeArquivo) {
        const estaNaPastaHtml =
            window.location.pathname.includes("/html/");

        return estaNaPastaHtml
            ? `../music/${nomeArquivo}`
            : `./music/${nomeArquivo}`;
    }

    // ----- Toca uma música pelo índice global (array completo "musicas") -----
    function tocarMusicaGlobal(indice, tempoInicial = 0){
        const musica = musicas[indice];


        console.log("Música:", musica);
        console.log("Arquivo:", musica.arquivo);

        if (!musica) return;

        audioPlayer.src = obterCaminhoMusica(musica.arquivo);

        console.log("SRC FINAL:", audioPlayer.src);

        audioPlayer.currentTime = tempoInicial;

        audioPlayer.play()
            .then(() => {
                atualizarInterface(musica);
                atualizarIconePlay(true);
                disco?.classList.add("tocando");
            })
            .catch(() => {
                atualizarInterface(musica);
                atualizarIconePlay(false);
                disco?.classList.remove("tocando");
            });
        localStorage.setItem(CHAVE_INDICE, indice);

        atualizarInterface(musica);
    }

    // ----- Próxima música aleatória (usada no loop automático) -----
    function proximaMusicaAleatoria(){
        const indiceAtual = parseInt(localStorage.getItem(CHAVE_INDICE)) || 0;
        const novoIndice = sortearIndice(indiceAtual);
        tocarMusicaGlobal(novoIndice);
    }

    // ----- Loop infinito: ao acabar, toca outra aleatória -----
    audioPlayer.addEventListener("ended", () => {
        proximaMusicaAleatoria();
    });

    // ----- Salva o tempo para retomar entre páginas -----
    audioPlayer.addEventListener("timeupdate", () => {
        localStorage.setItem(CHAVE_TEMPO, audioPlayer.currentTime);

        if (temInterfaceRadio){
            progressBar.value = audioPlayer.currentTime;
            tempoAtual.textContent = formatarTempo(audioPlayer.currentTime);
        }
    });

    function formatarTempo(segundos){
        if (isNaN(segundos)) return "0:00";
        const min = Math.floor(segundos / 60);
        const sec = Math.floor(segundos % 60).toString().padStart(2, "0");
        return `${min}:${sec}`;
    }

    // ----- INICIALIZAÇÃO DO PLAYER: retoma de onde parou OU sorteia uma nova -----
    function iniciarRadio(){
        const indiceSalvo = localStorage.getItem(CHAVE_INDICE);
        const tempoSalvo = parseFloat(localStorage.getItem(CHAVE_TEMPO)) || 0;

        if (indiceSalvo !== null){
            tocarMusicaGlobal(parseInt(indiceSalvo), tempoSalvo);
        } else {
            const indiceInicial = Math.floor(Math.random() * musicas.length);
            tocarMusicaGlobal(indiceInicial);
        }
    }

    iniciarRadio();

    // ----- Autoplay com som só é permitido após interação do usuário -----
    document.addEventListener("click", function iniciarComInteracao(){
        if (audioPlayer.paused){
            audioPlayer.play().catch(() => {});
        }
        document.removeEventListener("click", iniciarComInteracao);
    }, { once: true });


    // ========== A PARTIR DE AQUI, SÓ RODA NA PÁGINA radio.html ==========
    if (!temInterfaceRadio) return;

    // ----- Renderiza a lista de músicas na tela -----
    function renderizarLista(lista){
        listaMusicas.innerHTML = "";

        lista.forEach((musica) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${musica.titulo} - ${musica.artista}</span>
                <span>${musica.ano}</span>
            `;
            li.addEventListener("click", () => {
                const indiceNoArrayGlobal = musicas.indexOf(musica);
                listaAtual = lista;
                tocarMusicaGlobal(indiceNoArrayGlobal);
            });
            listaMusicas.appendChild(li);
        });
    }

    // ----- Preenche os filtros de artista e ano -----
    function preencherFiltros(){
        const artistas = [...new Set(musicas.map(m => m.artista))].sort();
        const anos = [...new Set(musicas.map(m => m.ano))].sort((a, b) => a - b);

        artistas.forEach(artista => {
            const option = document.createElement("option");
            option.value = artista;
            option.textContent = artista;
            filtroArtista.appendChild(option);
        });

        anos.forEach(ano => {
            const option = document.createElement("option");
            option.value = ano;
            option.textContent = ano;
            filtroAno.appendChild(option);
        });
    }

    // ----- Botão de play/pause -----
    btnPlay.addEventListener("click", () => {
        if (audioPlayer.paused){
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    // ----- Próxima / Anterior manuais (dentro da lista atual filtrada) -----
    btnProximo.addEventListener("click", () => {
        const indiceAtualGlobal = parseInt(localStorage.getItem(CHAVE_INDICE)) || 0;
        const musicaAtual = musicas[indiceAtualGlobal];
        const posicaoNaLista = listaAtual.indexOf(musicaAtual);

        const proximaPosicao = (posicaoNaLista + 1) % listaAtual.length;
        const proximaMusica = listaAtual[proximaPosicao];
        const indiceNoArrayGlobal = musicas.indexOf(proximaMusica);

        tocarMusicaGlobal(indiceNoArrayGlobal);
    });

    btnAnterior.addEventListener("click", () => {
        const indiceAtualGlobal = parseInt(localStorage.getItem(CHAVE_INDICE)) || 0;
        const musicaAtual = musicas[indiceAtualGlobal];
        const posicaoNaLista = listaAtual.indexOf(musicaAtual);

        const posicaoAnterior = (posicaoNaLista - 1 + listaAtual.length) % listaAtual.length;
        const musicaAnterior = listaAtual[posicaoAnterior];
        const indiceNoArrayGlobal = musicas.indexOf(musicaAnterior);

        tocarMusicaGlobal(indiceNoArrayGlobal);
    });

    // ----- Barra de progresso -----
    audioPlayer.addEventListener("loadedmetadata", () => {
        progressBar.max = audioPlayer.duration;
        tempoTotal.textContent = formatarTempo(audioPlayer.duration);
    });

    progressBar.addEventListener("input", () => {
        audioPlayer.currentTime = progressBar.value;
    });

    // ----- Volume -----
    volumeSlider.addEventListener("input", () => {
        audioPlayer.volume = volumeSlider.value;
    });
    audioPlayer.volume = volumeSlider.value;

    // ----- Filtro por artista e ano -----
    btnFiltrar.addEventListener("click", () => {
        const artistaSelecionado = filtroArtista.value;
        const anoSelecionado = filtroAno.value;

        let filtradas = musicas.filter(musica => {
            const passaArtista = !artistaSelecionado || musica.artista === artistaSelecionado;
            const passaAno = !anoSelecionado || musica.ano == anoSelecionado;
            return passaArtista && passaAno;
        });

        if (filtradas.length === 0){
            alert("Nenhuma música encontrada com esses filtros.");
            return;
        }

        listaAtual = filtradas;
        renderizarLista(filtradas);

        const indiceNoArrayGlobal = musicas.indexOf(filtradas[0]);
        tocarMusicaGlobal(indiceNoArrayGlobal);
    });

    // ----- Inicialização da interface -----
    preencherFiltros();
    renderizarLista(musicas);

    // Marca visualmente na lista a música que já está tocando (vinda de outra página)
    const indiceJaTocando = parseInt(localStorage.getItem(CHAVE_INDICE));
    if (!isNaN(indiceJaTocando)){
        atualizarInterface(musicas[indiceJaTocando]);
    }
});

