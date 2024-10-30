<script setup>

</script>

<template>
  <div class="container">
    <div class="card">
      <div class="background">
        <img src="../assets/images/jpg/homeView/kaiSa-1.jpg" alt="">
      </div>
      <div class="character">
        <img src="../assets/images/png/homeView/kaiSa-1.png" alt="">
      </div>
      <div class="content">
        <h1>Kai'Sa</h1>
        <p>League of Legends</p>
      </div>
    </div>
    <div class="card">
      <div class="background">
        <img src="../assets/images/jpg/homeView/silverWolf-1.jpg" alt="">
      </div>
      <div class="character">
        <img src="../assets/images/png/homeView/silverWolf-1.png" alt="">
      </div>
      <div class="content">
        <h1>Silver Wolf</h1>
        <p>Honkai: Star Rail</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  padding: 1vw;
}
.card {
  width: 484px;
  height: 275px;
  position: relative;
}
.background {
  width: 484px;
  height: 275px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 1px 1px 6px rgba(255, 255, 255, 0.3), 2px 2px 15px rgba(0, 0, 0, 0.5);
  transform-origin: bottom;
  transition: 1s;
}
.background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.character {
  width: 484px;
  height: 275px;
  position: absolute;
  bottom: 0;
  transform-origin: bottom;
  transition: 1.3s;
}
.character img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content {
  width: 440px;
  padding: 10px;
  color: #eee;
  position: absolute;
  bottom: -50px;
  opacity: 0;
  transition: 1s;
}
.content h1 {
  font-weight: 200;
}
.content p {
  font-weight: 200;
  padding-top: 10px;
  font-size: 14px;
}
.card:hover .background {
  transform: perspective(1000px) rotateX(30deg) skewX(-20deg);
}
.card:hover .character {
  transform: scale(1.3);
}
.card:hover .content {
  opacity: 1;
  transform: translateY(50px);
}
</style>
