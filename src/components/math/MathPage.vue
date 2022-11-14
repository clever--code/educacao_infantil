<template>
  <div class="container">
    <section class="jogo">
      <article class="numeros">
        <span class="numero parcela1">5</span> +
        <span class="numero parcela2">5</span> =
        <span class="numero resultado">?</span>
      </article>
      <article class="buttons">
        <button class="button refresh-button button-75" role="button">
          <span class="text"><i class="fa-solid fa-arrow-rotate-right"></i></span>
        </button>
        <button class="button speak-button button-75" role="button" onclick="start()">
          <span class="text"><i class="fa-solid fa-microphone"></i></span>
        </button>
      </article>
      <!-- Lottie File -->

      <lottie-player autoplay mode="normal" style="width: 320px">
      </lottie-player>

      <!-- Fim Lottie Files -->
    </section>
  </div>
</template>

<script script lang="ts">
// "use strict";

// const parcela1 = document.querySelector(".parcela1");
// const parcela2 = document.querySelector(".parcela2");
// const resultado = document.querySelector(".resultado");
// const speakButton = document.querySelector(".speak-button");
// const pauseSpeakButton = document.querySelector(".pause-speak-button");
// const refreshButton = document.querySelector(".refresh-button");

// let resultadoInterno;

// const gerarNumero = function () {
//   const random1 = Math.floor(Math.random() * 11);
//   const random2 = Math.floor(Math.random() * 11);
//   parcela1.innerText = random1;
//   parcela2.innerText = random2;

//   const question = `Quanto é ${random1} mais ${random2}?`;

//   resultadoInterno = random1 + random2;

//   speakButton.disabled = false;
//   // speech.stop();
//   resultado.textContent = "?";

//   // console.log(resultadoInterno);

//   const utterance = new SpeechSynthesisUtterance(question);
//   utterance.lang = "pt-Br";
//   utterance.rate = 1;
//   speechSynthesis.speak(utterance);
// };

// gerarNumero();

// class speechApi {
//   constructor() {
//     const SpeechToText =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     const player = document.querySelector("lottie-player");

//     this.speechApi = new SpeechToText();
//     this.output = resultado.output;
//     this.speechApi.continuous = false;
//     this.speechApi.lang = "pt-BR";

//     this.speechApi.onresult = (e) => {
//       console.log("resultado obtido");
//       var resultIndex = e.resultIndex;
//       var transcript = e.results[resultIndex][0].transcript;
//       console.log(transcript, resultadoInterno);
//       resultado.textContent = transcript;

//       if (Number(transcript) == resultadoInterno) {
//         player.load(
//           "https://assets9.lottiefiles.com/packages/lf20_PMFJFG0XnH.json"
//         );
//       } else {
//         player.load(
//           "https://assets1.lottiefiles.com/packages/lf20_1zvbfarz.json"
//         );
//       }
//     };
//   }

//   start() {
//     this.speechApi.start();
//   }

//   stop() {
//     this.speechApi.stop();
//   }
// }

// refreshButton.addEventListener("click", gerarNumero);

// // speakButton.addEventListener("click", function () {
// //   const resultadoFala = prompt("Digite a resposta");

// //   if (resultadoFala != resultadoInterno) {
// //     console.log("Errado");
// //   } else {
// //     console.log("Certo");
// //   }
// // });

// const speech = new speechApi();

// // speakButton.addEventListener("click", (e) => {
// //   speakButton.disabled = true;
// //   speech.start();
// // });

// const start = function () {
//   speech.start();
// };
</script>

<style scoped>
body {
  background-color: #fbf1f1;
}

.hide {
  display: none;
}

.numeros {
  font-family: "Codec cold", sans-serif;
  font-size: 66px;
  font-weight: 700;
  color: #551b98;
}

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.buttons {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

/* Button Style */

/* CSS */
.button-75 {
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  /* display: flex;
  flex-direction: column; */
  font-family: "Codec cold", sans-serif;
  font-size: 56px;
  font-weight: 700;
  height: 64px;
  justify-content: center;
  letter-spacing: 0.4px;
  line-height: 1;
  /* max-width: 100%; */
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 1rem;
}

.button-75:active {
  outline: 0;
}

.button-75:hover {
  outline: 0;
}

.button-75 span {
  transition: all 200ms;
}

.button-75:hover span {
  transform: scale(0.9);
  opacity: 0.75;
}

@media screen and (max-width: 991px) {
  .button-75 {
    font-size: 15px;
    height: 50px;
  }

  .button-75 span {
    line-height: 50px;
  }
}
</style>
