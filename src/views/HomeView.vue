<script setup>
import MediaBar from "@/components/MediaBar.vue";
import ProjectShowCase from "@/components/ProjectShowCase.vue";
import ShowCaseDescription from "@/components/ShowCaseDescription.vue";
import CosplayShowCase from "@/components/CosplayShowCase.vue";
</script>

<template>
  <div class="shell">
    <header>
      <div class="img">
        <video src="@/assets/videos/homeView/Emily.mp4" class="video" preload="auto" loop playsinline autoplay muted/>
        <h1>Goodnight</h1>
        <div class="arrow"></div>
        <div class="arrow"></div>
        <div class="arrow"></div>
      </div>
    </header>
    <div class="main">
      <main>
        <div class="content top">
          <h3>AkiArasaki</h3>
          <p>How nice would it be, if it's midnight forever ...</p>
        </div>
        <div class="parallax p1">
          <h3>Turning insights into gold</h3>
        </div>
        <div class="content">
          <ProjectShowCase/>
          <ShowCaseDescription
            hue-rotation="4"
            title="I have made things like these ..."
            description="I love creating stuff from 0,
            the satisfaction gained from implementing a function is the best."
            link-to="/project"/>
        </div>
        <div class="parallax p2">
          <h3>Making moments become memories</h3>
        </div>
        <div class="content">
          <ShowCaseDescription
            hue-rotation="1"
            title="I could be ones like these ..."
            description="I love experiencing stories,
            doing cosplay really leads me into characters' fantastic worlds."
            link-to="/cosplay"/>
          <CosplayShowCase/>
        </div>
      </main>
    </div>
  </div>
  <MediaBar/>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  height: 2000px;
  overflow-x: hidden;

}
.shell {
  width: 100%;
  display: flex;
  flex-direction: column;

}
header {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
  transition: clip-path 0.5s ease;
  position: relative;
}
.img {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  transform: scale(1);
  transition: transform 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-image: url("@/assets/images/jpg/homeView/banner.jpg");
  animation: am2 ease-out 1s 0.2s backwards;
  filter: brightness(0.6);
}
.video {
  top: 0;
  width: 100%;
  position: absolute;
  animation: am2 ease-out 1s 0.2s backwards;
  filter: brightness(0.6);
}
@keyframes am2 {
  0% {
    filter: brightness(0);
  }
  100% {
    filter: brightness(0.6);
  }
}
.img h1 {
  margin: auto auto;
  font-size: 100px;
  animation: am1 ease-out 1s 0.2s backwards;
  position: relative;
  color: #eee;
}
@keyframes am1 {
  0% {
    transform: translateY(8px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.arrow {
  position: relative;
  width: 1vw;
  height: 1vw;
  border-bottom: 2px solid rgba(238, 238, 238, 0.5);
  border-left: 2px solid rgba(238, 238, 238, 0.5);
  transform: rotate(-45deg);
  animation: arrow 2s infinite;
}
.arrow:nth-child(1) {
  animation-delay: -0.2s;
}
.arrow:nth-child(2) {
  animation-delay: -0.1s;
}
@keyframes arrow {
  0% {
    opacity: 0;
    transform: rotate(-45deg) translate(30px, -30px);
  }
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform:rotate(-45deg) translate(0, 0);
  }
}
.parallax {
  width: 100%;
  height: 80vh;
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  filter: brightness(0.7);
}
.p1 {
  background-image: url("@/assets/images/jpg/homeView/homeView-project.jpg");
}
.p2 {
  background-image: url("@/assets/images/jpg/homeView/homeView-cosplay.jpg");
}
.content {
  width: 100%;
  height: 50vh;
  min-height: 500px;
  margin: 0 auto;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top {
  flex-direction: column;
}
h3 {
  font-size: 45px;
  letter-spacing: 10px;
  text-align: center;
  color: white;
  font-weight: 400;
}
p {
  color: #eee;
  font-size: 16px;
  line-height: 28px;
}
</style>

<script>
export default {
  mounted() {
    const header = document.querySelector('header');
    const img = document.querySelector('.img');
    let scrollDistance = 0;
    let requestId = null;
    function updateHeaderClipPath() {
      header.style.clipPath = `polygon(0 0, 100% 0%, 100% ${(scrollDistance <= 600) ? 100 - ((scrollDistance / 600) * 60) : 75}%, 0 100%)`;
      const scaleValue = 1 + ((scrollDistance / 600) * 0.5);
      img.style.transform = `scale(${scaleValue})`;
    }
    function scrollHandler(event) {
      if (event.deltaY < 0) {
        scrollDistance = Math.max(0, scrollDistance + event.deltaY);
      } else {
        scrollDistance = Math.min(600, scrollDistance + event.deltaY);
      }
      if (!requestId) {
        requestId = window.requestAnimationFrame(() => {
          updateHeaderClipPath();
          requestId = null;
        });
      }
    }
    window.addEventListener('wheel', scrollHandler);
  }
}
</script>
