<script setup>

</script>

<template>
  <div class="container">
    <div class="wide">
      <div class="image">
        <img src="@/assets/images/jpg/cosplayView/others/nier1.jpg" alt="">
        <div class="text">
          <h3>By: NesteaC<br><span>At: High Park</span></h3>
        </div>
      </div>
    </div>
    <div class="wide">
      <div class="image">
        <img src="@/assets/images/jpg/cosplayView/others/nier2.jpg" alt="">
        <div class="text">
          <h3>By: NesteaC<br><span>At: High Park</span></h3>
        </div>
      </div>
    </div>
    <div class="wide">
      <div class="image">
        <img src="@/assets/images/jpg/cosplayView/others/nier3.jpg" alt="">
        <div class="text">
          <h3>By: Katherine<br><span>At: AnimeNorth2022</span></h3>
        </div>
      </div>
    </div>
    <div class="wide">
      <div class="image">
        <img src="@/assets/images/jpg/cosplayView/others/kaiSa1.jpg" alt="">
        <div class="text">
          <h3>By: Janna<br><span>At: AnimeNorth2024</span></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  padding: 20px;
  grid-gap: 1vw;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 270px;
  grid-auto-flow: dense;
}
.container div {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.image {
  width: 100%;
  height: 100%;
  position: relative;
}
img {
  border-radius: 20px;
  transition: 0.5s;
}
.image:hover img {
  transform: scale(1.05);
  filter: blur(2px);
}
.text {
  position: absolute;
  color: #eee;
  opacity: 1;
  transition: 0.5s;
}
.image:hover .text {
  opacity: 1;
}
.wide {
  grid-column: span 2;
}
.tall {
  grid-row: span 2;
}
.big {
  grid-column: span 2;
  grid-row: span 2;
}
.wide .image img {
  height: 100%;
}
</style>
