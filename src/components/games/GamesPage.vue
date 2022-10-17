<template>
  <q-page>
    <div class="math__wrap">
      <h1>Educação Infantil por Voz</h1>
      <h2 class="mt-0200">Escolha um jogo para aprender</h2>
      <div class="math__list">
        <div class="math__item">
          <a href="#/jogos/matematica">
            <h3 class="math__item-title">Matemática</h3>
            <div class="math__item-image">
              <img src="src/assets/images/math01.png" alt="Jogo de matemática">
            </div>
          </a>
        </div>
        <div class="math__item">
          <a href="#/jogos">
            <h3 class="math__item-title">Que Planeta é esse?</h3>
            <div class="math__item-image">
              <img src="src/assets/images/planeta01.webp" alt="Jogo dos planetas">
            </div>
          </a>
        </div>
        <div class="math__item">
          <a href="#/jogos">
            <h3 class="math__item-title">Que bandeira é esse?</h3>
            <div class="math__item-image">
              <img src="src/assets/images/bandeira.jpg" alt="Jogo das bandeiras">
            </div>
          </a>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #EC4067;
}

img {
  max-width: 100%;
}

/* RESET */
.mt-0200 {
  margin-top: 16px;
}

body {
  font-family: 'Poppins', sans-serif;
}

.math__wrap {
  max-width: 1200px;
  margin: 60px auto;
}

.math__list {
  display: flex;
  gap: 32px;
  margin-top: 32px;
}

.math__item {
  display: flex;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.math__item-image {
  max-width: 300px;
  margin: 16px 0 0 0;
}

.math__item-title {
  text-align: center;
}
</style>
