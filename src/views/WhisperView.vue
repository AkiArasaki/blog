<script setup>

</script>

<template>
  <div class="container">
    <div class="cards">
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card"><img src="@/assets/images/jpg/homeView/banner.jpg" alt=""></div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card"><img src="@/assets/images/jpg/homeView/banner.jpg" alt=""></div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card"><img src="@/assets/images/jpg/homeView/banner.jpg" alt=""></div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card"><img src="@/assets/images/jpg/homeView/banner.jpg" alt=""></div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
      <div class="card"><img src="@/assets/images/jpg/homeView/banner.jpg" alt=""></div>
      <div class="card">Whisper</div>
      <div class="card">Whisper</div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
  min-block-size: 100%;
  display: grid;
  place-content: center;
  padding-block: 20dvh;
}
@keyframes slide-fade-in {
  from {
    opacity: 0;
    box-shadow: none;
    transform: scale(.8) translateY(15vh);
  }
}
.cards {
  display: grid;
  gap: 2rem;
  grid-auto-flow: dense;
  grid-template-columns: repeat(5, 30ch);
}
.card {
  animation: slide-fade-in both;
  animation-timeline: view();
  animation-range: contain 0% contain 50%;
  border-radius: 20px;
  line-height: 6;
  font-size: 32px;
  letter-spacing: 5px;
  color: rgba(238, 238, 238, 0.7);
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  box-shadow: inset 1px 1px 6px rgba(255, 255, 255, 0.3), 2px 2px 15px rgba(0, 0, 0, 0.5);
  transition: 1s;
}
.card img {
  width: 100%;
  height: 100%;
}
.card:nth-of-type(4n) {
  grid-column: span 2;
}
.card:nth-of-type(5n) {
  grid-column: span 2;
}
.card:nth-of-type(7n) {
  grid-row: span 2;
}
</style>
