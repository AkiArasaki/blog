<script setup>

import MediaBar from "@/components/MediaBar.vue";
import SilverWolfBooth from "@/components/SilverWolfBooth.vue";
import VioletEvergardenBooth from "@/components/VioletEvergardenBooth.vue";
import TwobBooth from "@/components/TwobBooth.vue";
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
    <section class="twob">
      <div class="background">
        <img src="@/assets/images/jpg/cosplayView/twob/cosplay-2b-back.jpg" alt="">
      </div>
      <div class="character twob-character">
        <img class="twob-character-img" src="../assets/images/png/cosplayView/twob/cosplay-2b-front.png" alt="">
      </div>
      <div class="booth">
        <div class="twob-booth">
          <TwobBooth/>
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
    </section>
    <section class="kaiSa">
      <div class="background kaiSa-background">
        <img src="@/assets/images/jpg/cosplayView/kaiSa/cosplay-kaiSa-back.jpg" alt="">
      </div>
      <div class="character kaiSa-character">
        <img class="kaiSa-character-img" src="../assets/images/png/cosplayView/kaiSa/cosplay-kaiSa-front.png" alt="">
      </div>
    </section>
    <section class="coming-soon">
      <div class="image-container">
        <img src="@/assets/images/jpg/cosplayView/cosplay-comingSoon.jpg" alt="">
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
.twob {
  filter: brightness(0.7);
}
.twob-character {
  bottom: -8vh;
  right: 5vw;
  animation: a4 10s infinite;
}
.twob-character-img {
  transform: scale(1.2);
}
.twob-booth {
  width: 60%;
  height: 60%;
  margin-top: 10%;
  margin-left: 3%;
}
@keyframes a4 {
  0% {
    transform: translateY(-2%);
  }
  50% {
    transform: translateY(2%);
  }
  100% {
    transform: translateY(-2%);
  }
}
.nicole {
  filter: brightness(0.9);
}
.nicole-background {
  animation: a5 10s infinite;
}
.nicole-character {
  animation: a6 10s infinite;
}
@keyframes a5 {
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
@keyframes a6 {
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
.kaiSa {
  filter: brightness(0.9);
}
.kaiSa-character {
  animation: a4 10s infinite;
}
.kaiSa-character-img {
  transform: scale(1.1);
}
.coming-soon {
  height: calc(100vh - 110px);
}
.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
.image-container img {
  width: 50%;
  height: auto;
  border-radius: 20px;
  box-shadow: inset 1px 1px 6px rgba(255, 255, 255, 0.3), 2px 2px 15px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}
</style>
