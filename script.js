const mensajes = {
    1: {
        titulo: "Para ti",
        texto: "Amor mío ojalá te guste este detalle, trate de hacerlo lo mas hermoso posible, te amo mucho mi amor hermoso."
    },
    2: {
        titulo: "🏎️ Mi lobito",
        texto: "Mi lobito precioso, recuerda que tu lobita te ama mucho y siempre te amará, por toda la eternidad."
    },
    3: {
        titulo: "Mi alancito guapisimo",
        texto: "Amorrrrr, te amo infinitamente, recuerda que siempre vas a ser el niño de mis ojos, mi amor eterno y ya casi mi espositoooo, estoy esperando tanto el dia para casarnos mi amorr."
    },
    4: {
        titulo: "🌷 Mi alma gemela",
        texto: "Mi cheñolito, usted es mi pieza que me complementa perfectamente, por favor jamás se vaya de mi ladito, lo amo muchisisisimo y no sabria que hacer sin usted."
    },
    5: {
        titulo: "❤️ DE YO PA TUUU",
        texto: "Amorr me haces muuy felizzzz, gracias por estar en mi vida y gracias por todo el amor que me das, espero estarte haciendo muy feliz. Te amo con toda mi alma mi hermoso cheñolito, adoro todo de ti, esos bellos ojos que tienes y esa naricita tan lindaaa, mi amor por ti crece cada dia y asi será por toda la eternidad."
    },
    6: {
        titulo: "💕 Gracias",
        texto: "Gracias por cada momento, cada palabra, cada sonrisa y por todas esas pequeñas cosas que hacen especial estar contigo."
    },
    7: {
        titulo: "💜 My little prince",
        texto: "Mi principe hermoshooo, seremos tu y yo por siempre, aunque pasen miles de cosas recuerda que siempre seremos un equipo y vamos a poder con todooo, pq quiero que tu seas mi acompañante por toda mi vida, quiero que seas tu por siempre, no quiero a nadie más solo te quiero a tiiii, jamás te dejaré ir mi principe guapisimo."
    }
};

function mostrarMensaje(numero) {
    const ventana = document.getElementById("mensaje");
    const titulo = document.getElementById("titulo-mensaje");
    const texto = document.getElementById("texto-mensaje");

    titulo.textContent = mensajes[numero].titulo;
    texto.textContent = mensajes[numero].texto;

    ventana.style.display = "flex";
}

function cerrarMensaje() {
    document.getElementById("mensaje").style.display = "none";
}

const musica = document.getElementById("musica-fondo");

document.addEventListener("click", function () {
    if (musica && musica.paused) {
        musica.play().catch(() => {});
    }
}, { once: true });
