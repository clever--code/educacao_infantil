"use strict";

const parcela1 = document.querySelector(".parcela1");
const parcela2 = document.querySelector(".parcela2");
const resultado = document.querySelector(".resultado");
const speakButton = document.querySelector(".speak-button");
const pauseSpeakButton = document.querySelector(".pause-speak-button");
const refreshButton = document.querySelector(".refresh-button");

let resultadoInterno;

const gerarNumero = function () {
  const random1 = Math.floor(Math.random() * 11);
  const random2 = Math.floor(Math.random() * 11);
  parcela1.innerText = random1;
  parcela2.innerText = random2;

  const question = `Quanto é ${random1} mais ${random2}?`;

  resultadoInterno = random1 + random2;

  speakButton.disabled = false;
  // speech.stop();
  resultado.textContent = "?";

  // console.log(resultadoInterno);

  const utterance = new SpeechSynthesisUtterance(question);
  utterance.lang = "pt-Br";
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
};

gerarNumero();

class speechApi {
  constructor() {
    const SpeechToText =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const player = document.querySelector("lottie-player");

    this.speechApi = new SpeechToText();
    this.output = resultado.output;
    this.speechApi.continuous = false;
    this.speechApi.lang = "pt-BR";

    this.speechApi.onresult = (e) => {
      console.log("resultado obtido");
      var resultIndex = e.resultIndex;
      var transcript = e.results[resultIndex][0].transcript;
      console.log(transcript, resultadoInterno);
      resultado.textContent = transcript;

      if (Number(transcript) == resultadoInterno) {
        player.load(
          "https://assets9.lottiefiles.com/packages/lf20_PMFJFG0XnH.json"
        );
      } else {
        player.load(
          "https://assets1.lottiefiles.com/packages/lf20_1zvbfarz.json"
        );
      }
    };
  }

  start() {
    this.speechApi.start();
  }

  stop() {
    this.speechApi.stop();
  }
}

refreshButton.addEventListener("click", gerarNumero);

// speakButton.addEventListener("click", function () {
//   const resultadoFala = prompt("Digite a resposta");

//   if (resultadoFala != resultadoInterno) {
//     console.log("Errado");
//   } else {
//     console.log("Certo");
//   }
// });

const speech = new speechApi();

// speakButton.addEventListener("click", (e) => {
//   speakButton.disabled = true;
//   speech.start();
// });

const start = function () {
  speech.start();
};
