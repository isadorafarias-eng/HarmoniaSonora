const listaDeTeclas = document.querySelectorAll(".tecla");
let audioAtual = "";

const imagens = [
    "./assets/images/Ariana1.1.png",
    "./assets/images/Ariana1.2.png",
    "./assets/images/Ariana1.3.png",
    "./assets/images/Ariana1.4.png",
    "./assets/images/Ariana1.5.png",
    "./assets/images/Ariana1.6.png",
];

function tocarSom(idElementoSom) {
    const elemento = document.querySelector(idElementoSom);

    if (elemento) {
        if (audioAtual) {
            audioAtual.pause();
            audioAtual.currentTime = 0;
        }

        elemento.play();
        audioAtual = elemento;
    }
}

listaDeTeclas.forEach((tecla, indice) => {

    const instrumento = tecla.classList[1];
    const audio = `#tocar_${instrumento}`;

    // Pega a imagem que está dentro deste botão
    const imgCapa = tecla.querySelector(".album");

    tecla.onclick = function () {

        tocarSom(audio);

        // Troca somente a imagem deste botão
        imgCapa.src = imagens[indice];
    };

    tecla.onkeydown = function (event) {
        if (
            event.code === "Enter" ||
            event.code === "Space" ||
            event.code === "NumpadEnter"
        ) {
            tecla.classList.add("ativa");
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove("ativa");
    };
});