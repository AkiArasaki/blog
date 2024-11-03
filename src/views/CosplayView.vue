<script setup>

import MediaBar from "@/components/MediaBar.vue";
import SilverWolfBooth from "@/components/SilverWolfBooth.vue";
import VioletEvergardenBooth from "@/components/VioletEvergardenBooth.vue";
import NicoleBooth from "@/components/NicoleBooth.vue";
import OthersBooth from "@/components/OthersBooth.vue";
</script>

<template>
  <div class="main">
    <section class="silver-wolf">
      <div class="background">
        <img src="@/assets/images/jpg/cosplayView/silverWolf/cosplay-silverWolf-back.jpg" alt="">
      </div>
      <div class="character silver-wolf-character">
        <img class="silver-wolf-character-img" src="../assets/images/png/cosplayView/silverWolf/cosplay-silverWolf-front.png" alt="">
      </div>
      <div class="booth">
        <div class="silver-wolf-booth">
          <SilverWolfBooth/>
        </div>
      </div>
    </section>
    <section class="violet-evergarden">
      <div class="background">
        <img src="@/assets/images/jpg/cosplayView/violetEvergarden/cosplay-violetEvergarden-back.jpg" alt="">
      </div>
      <div class="character violet-evergarden-character">
        <img class="violet-evergarden-character-img" src="../assets/images/png/cosplayView/violetEvergarden/cosplay-violetEvergarden-front.png" alt="">
      </div>
      <div class="booth">
        <div class="violet-evergarden-booth">
          <VioletEvergardenBooth/>
        </div>
      </div>
    </section>
    <section class="nicole">
      <div class="background nicole-background">
        <img src="@/assets/images/jpg/cosplayView/nicole/cosplay-nicole-back.jpg" alt="">
      </div>
      <div class="character nicole-character">
        <img class="nicole-character-img" src="../assets/images/png/cosplayView/nicole/cosplay-nicole-front.png" alt="">
      </div>
      <div class="booth">
        <div class="nicole-booth">
          <NicoleBooth/>
        </div>
      </div>
    </section>
    <section class="others">
      <div class="others-booth">
        <h2 class="title">Others</h2>
        <OthersBooth/>
      </div>
    </section>
    <MediaBar/>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.main {
  scroll-snap-type: y mandatory;
  overflow: scroll;
  height: 100vh;
}
section {
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  overflow: hidden;
}
.background {
  width: 100%;
  height: 100%;
}
.background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.character {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
}
.character img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.booth {
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
}
.silver-wolf {
  filter: brightness(0.9);
}
.silver-wolf-character {
  animation: a1 10s infinite;
}
.silver-wolf-character-img {
  transform: scale(1.1);
}
.silver-wolf-booth {
  width: 60%;
  height: 90%;
  overflow: scroll;
  margin-top: 5%;
  margin-left: 5%;
}
@keyframes a1 {
  0% {
    transform: translate(-1%, 1%);
  }
  50% {
    transform: translate(1%, -1%);
  }
  100% {
    transform: translate(-1%, 1%);
  }
}
.violet-evergarden {
  filter: brightness(0.4);
  animation: a2 10s infinite;
}
.violet-evergarden-character {
  animation: a3 10s infinite;
  transform-origin: bottom;
}
@keyframes a2 {
  0% {
    filter: brightness(0.7);
  }
  50% {
    filter: brightness(0.9);
  }
  100% {
    filter: brightness(0.7);
  }
}
@keyframes a3 {
  0% {
    transform: perspective(2000px) rotateX(0) skewX(0);
  }
  50% {
    transform: perspective(2000px) rotateX(2deg) skewX(-1deg);
  }
  100% {
    transform: perspective(2000px) rotateX(0) skewX(0);
  }
}
.nicole {
  filter: brightness(0.9);
}
.nicole-background {
  animation: a4 10s infinite;
}
.nicole-character {
  animation: a5 10s infinite;
}
.nicole-booth {
  width: 60%;
  height: 90%;
  overflow: scroll;
  margin-top: 5%;
  margin-left: 35%;
}
@keyframes a4 {
  0% {
    filter: blur(3px);
  }
  50% {
    filter: blur(5px);
  }
  100% {
    filter: blur(3px);
  }
}
@keyframes a5 {
  0% {
    transform: translateX(2%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(2%);
  }
}
.others {
  height: calc(100vh - 110px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
}
.others-booth {
  width: 80%;
  height: calc(100% - 110px);
  padding-top: 110px;
  text-align: center;
}
.title {
  color: rgba(238, 238, 238, 0.7);
  font-size: 46px;
  font-weight: normal;
  margin: 0;
}
</style>
