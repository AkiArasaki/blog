<script setup>

</script>

<template>
  <div class="shell">
    <div class="images slower1">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden1.png" alt="">
      <div class="text">
        <h3>By: rtbsb520<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images slower">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden2.png" alt="">
      <div class="text">
        <h3>By: zhuzhutou<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images faster1">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden12.png" alt="">
      <div class="text">
        <h3>By: rtbsb520<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images vertical">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden4.png" alt="">
      <div class="text">
        <h3>By: zhuzhutou<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images slower">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden5.png" alt="">
      <div class="text">
        <h3>By: rtbsb520<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images faster">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden6.png" alt="">
      <div class="text">
        <h3>By: zhuzhutou<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images vertical">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden7.png" alt="">
      <div class="text">
        <h3>By: zhuzhutou<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images faster1">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden8.png" alt="">
      <div class="text">
        <h3>By: zhuzhutou<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images vertical">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden9.png" alt="">
      <div class="text">
        <h3>By: zhuzhutou<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images faster1">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden10.png" alt="">
      <div class="text">
        <h3>By: rtbsb520<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images faster">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden11.png" alt="">
      <div class="text">
        <h3>By: rtbsb520<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images slower">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden3.png" alt="">
      <div class="text">
        <h3>By: zhuzhutou<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images faster1">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden13.png" alt="">
      <div class="text">
        <h3>By: rtbsb520<br><span>At: University College</span></h3>
      </div>
    </div>
    <div class="images vertical">
      <img src="@/assets/images/png/cosplayView/violetEvergarden/violetEvergarden14.png" alt="">
      <div class="text">
        <h3>By: rtbsb520<br><span>At: University College</span></h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.images img{
  border: #eee solid 10px;
  max-width: 40vh;
  max-height: 45vh;
  transition: 0.5s;
}
.images:hover img {
  transform: scale(1.1);
  filter: blur(2px);
}
.images:hover{
  z-index: 999;
}
.shell {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
  transform: rotate(-90deg) translate3d(0, -100vh, 0);
  transform-origin: right top;
  overflow-x: hidden;
  height: 100vw;
  perspective: 1px;
  transform-style: preserve-3d;
}
.images {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  transform-origin: 50% 50%;
  transform: rotate(90deg) translateZ(.1px) scale(1.1) translateX(0px) translateY(2vh);
  transition: 1s;
}
.slower {
  transform: rotate(90deg) translateZ(-.12px) scale(1.3) translateX(0%) translateY(-8vh);
}
.slower1 {
  transform: rotate(90deg) translateZ(-.25px) scale(1.7) translateX(0%) translateY(4vh);
}
.faster {
  transform: rotate(90deg) translateZ(-.05px) scale(1.2) translateX(0%) translateY(15vh);
}
.faster1 {
  transform: rotate(90deg) translateZ(.05px) scale(1.4) translateX(0%) translateY(10vh);
}
.vertical {
  transform: rotate(90deg) translateZ(-.1px) scale(1.6) translateX(0%) translateY(-3vh);
}
.text {
  position: absolute;
  color: #eee;
  opacity: 0;
  transition: 1s;
}
.images:hover .text {
  opacity: 1;
}
</style>
