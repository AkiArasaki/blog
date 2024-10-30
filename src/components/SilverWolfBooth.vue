<script setup>

</script>

<template>
  <div class="photo-booth">
    <div class="photo-container">
      <div class="photo"><img src="@/assets/images/jpg/cosplayView/silverWolf/silverWolf1.jpg" alt=""></div>
      <div class="glass">
        <h3>By: rtbsb520<br><span>At: ZuiBeerBar</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="@/assets/images/jpg/cosplayView/silverWolf/silverWolf2.jpg" alt=""></div>
      <div class="glass">
        <h3>By: rtbsb520<br><span>At: ZuiBeerBar</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="@/assets/images/jpg/cosplayView/silverWolf/silverWolf3.jpg" alt=""></div>
      <div class="glass">
        <h3>By: rtbsb520<br><span>At: ZuiBeerBar</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="../assets/images/jpg/cosplayView/silverWolf/silverWolf4.jpg" alt=""></div>
      <div class="glass">
        <h3>By: rtbsb520<br><span>At: ZuiBeerBar</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="../assets/images/jpg/cosplayView/silverWolf/silverWolf5.jpg" alt=""></div>
      <div class="glass">
        <h3>By: rtbsb520<br><span>At: ZuiBeerBar</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="../assets/images/jpg/cosplayView/silverWolf/silverWolf6.jpg" alt=""></div>
      <div class="glass">
        <h3>By: rtbsb520<br><span>At: ZuiBeerBar</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="../assets/images/jpg/cosplayView/silverWolf/silverWolf7.jpg" alt=""></div>
      <div class="glass">
        <h3>By: rtbsb520<br><span>At: ZuiBeerBar</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="../assets/images/jpg/cosplayView/silverWolf/silverWolf8.jpg" alt=""></div>
      <div class="glass">
        <h3>By: mofumofu<br><span>At: AnimeNorth2024</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="../assets/images/jpg/cosplayView/silverWolf/silverWolf9.jpg" alt=""></div>
      <div class="glass">
        <h3>By: mofumofu<br><span>At: AnimeNorth2024</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="../assets/images/jpg/cosplayView/silverWolf/silverWolf10.jpg" alt=""></div>
      <div class="glass">
        <h3>By: tusu<br><span>At: AnimeNorth2024</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="../assets/images/jpg/cosplayView/silverWolf/silverWolf11.jpg" alt=""></div>
      <div class="glass">
        <h3>By: tusu<br><span>At: AnimeNorth2024</span></h3>
      </div>
    </div>
    <div class="photo-container">
      <div class="photo"><img src="../assets/images/jpg/cosplayView/silverWolf/silverWolf12.jpg" alt=""></div>
      <div class="glass">
        <h3>By: zhaizhai<br><span>At: AnimeNorth2024</span></h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.photo-booth {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  padding: 50px;
  transition: 0.5s;
}
.photo-booth .photo-container {
  position: relative;
  width: 10vw;
  height: 10vw;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.photo-booth .photo-container .photo {
  position: absolute;
  inset: 0;
  border-radius: 12px;
  border: 4px solid rgba(0, 0, 0, 0.2);
}
.photo-booth .photo-container .photo img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: 0.5s;
}
.photo-booth .photo-container:hover .photo img{
  opacity: 0.5;
}
.photo-booth .photo-container .glass {
  position: absolute;
  inset: 0;
  background: linear-gradient(#fff2, transparent);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  scale: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
}
.photo-booth .photo-container:hover {
  width: 12vw;
  height: 12vw;
  transform: rotate(-15deg);
}
.photo-booth .photo-container:hover .glass {
  scale: 1;
  opacity: 1;
  transform: rotate(20deg);
}
.photo-booth .photo-container .glass h3 {
  font-size: 1.25em;
  color: #eee;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 0.8em;
}
.photo-booth .photo-container .glass h3 span {
  font-weight: 400;
  font-size: 0.5em;
}
</style>
