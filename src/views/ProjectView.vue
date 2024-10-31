<script setup>

import MediaBar from "@/components/MediaBar.vue";
</script>

<template>
  <div class="shell">
    <div class="header">
      <h2 class="title">Development Timeline</h2>
      <h3 class="subtitle">AkiArasaki</h3>
    </div>
    <div class="timeline">
      <div class="item" data-text="This Blog">
        <div class="content">
          <img class="img" src="@/assets/images/jpg/projectView/project-blog.jpg" alt="">
          <h2 class="content-title">2024</h2>
          <p class="content-description">
            Yes, you are here. Welcome to this blog
          </p>
        </div>
      </div>
      <div class="item" data-text="UTMCAPS">
        <div class="content">
          <img class="img" src="@/assets/images/jpg/projectView/project-UTMCAPSWebsite.jpg" alt="">
          <h2 class="content-title">2024</h2>
          <p class="content-description">
            As a starting member of the club,
            we created this site from smooth flat.
          </p>
        </div>
      </div>
      <div class="item" data-text="Igiari">
        <div class="content">
          <img class="img" src="@/assets/images/jpg/projectView/project-igiari.jpg" alt="">
          <h2 class="content-title">2024</h2>
          <p class="content-description">
            An Ace Attorney Inspired APP,
            allows you to execute OBJECTION!
          </p>
        </div>
      </div>
      <div class="item" data-text="utahime">
        <div class="content">
          <img class="img" src="@/assets/images/jpg/projectView/project-utahime.jpg" alt="">
          <h2 class="content-title">2024</h2>
          <p class="content-description">
            A easy to deploy discord music bot,
            towards discord users with less experience working with vps and programming.
          </p>
        </div>
      </div>
      <div class="item" data-text="EWW">
        <div class="content">
          <img class="img" src="@/assets/images/jpg/projectView/project-eww.jpg" alt="">
          <h2 class="content-title">2023</h2>
          <p class="content-description">
            This is an prototype of an mobile APP for those who have allergies
            in order to protect them from allergens.
          </p>
        </div>
      </div>
      <div class="item" data-text="music_bot">
        <div class="content">
          <img class="img" src="@/assets/images/jpg/projectView/project-discord_music_bot.jpg" alt="">
          <h2 class="content-title">2023</h2>
          <p class="content-description">
            My first discord music bot released, due to the suspension of Groovy,
            .p is the best command for ever.
          </p>
        </div>
      </div>
      <div class="item" data-text="T.E. of YoRHa">
        <div class="content">
          <img class="img" src="@/assets/images/jpg/projectView/project-theEndOfYoRHa.jpg" alt="">
          <h2 class="content-title">2023</h2>
          <p class="content-description">
            It was a grade 12 final project,
            the winter a1.1 released. 人類に栄光あれ。
          </p>
        </div>
      </div>
      <div class="item" data-text="BlackJack">
        <div class="content">
          <img class="img" src="@/assets/images/jpg/projectView/project-blackJack.jpg" alt="">
          <h2 class="content-title">2022</h2>
          <p class="content-description">
            This is an Java application can be host locally,
            to play blackJack with friends under same LAN.
          </p>
        </div>
      </div>
      <div class="item" data-text="MultiPage">
        <div class="content">
          <img class="img" src="@/assets/images/jpg/projectView/project-multiPageWebsiteAssignment.jpg" alt="">
          <h2 class="content-title">2022</h2>
          <p class="content-description">
            It was a grade 11 final project,
            where I started to archive my projects.
          </p>
        </div>
      </div>
    </div>
  </div>
  <MediaBar/>
</template>

<style scoped>
.shell {
  width: 100%;
  position: relative;
  padding: 100px 0;
  transition: 0.3s ease 0s;
  background-attachment: fixed;
  background-size: cover;
}
.shell:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: "";
}
.header {
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}
.title {
  color: #eee;
  font-size: 46px;
  font-weight: normal;
  margin: 0;
}
.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}
.content-title {
  font-weight: normal;
  font-size: 66px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  padding: 0 10px;
  box-sizing: border-box;
  color: #eee;
}
.content-description {
  margin: 0;
  font-size: 15px;
  box-sizing: border-box;
  color: rgba(238, 238, 238, 0.7);
  line-height: 25px;
}
.timeline:before {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background-color: rgba(255, 255, 255, 0.07);
}
.item {
  padding: 40px 0;
  opacity: 0.3;
  transition: 0.5s;
  box-sizing: border-box;
  width: calc(50% - 40px);
  display: flex;
  position: relative;
  transform: translateY(-80px);
}
.item:before {
  content: attr(data-text);
  width: 100%;
  position: absolute;
  color: rgba(238, 238, 238, 0.5);
  border-left: 2px solid rgba(238, 238, 238, 0.5);
  top: 70%;
  margin-top: -5px;
  padding-left: 15px;
  opacity: 0;
  right: calc(-100% - 56px);
  font: 900 20px '';
  letter-spacing: 5px;
}
.item:nth-child(even) {
  align-self: flex-end;
}
.item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 56px);
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(238, 238, 238, 0.5);
  padding-right: 15px;
}
.item:hover {
  opacity: 1;
  transform: translateY(0);
}
.item:hover:before {
  top: 50%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}
.item:hover .content-title {
  margin: -50px 0 20px 0;
}
.img {
  max-width: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}
.subtitle {
  color: rgba(238, 238, 238, 0.5);
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}
@media only screen and (max-width: 767px) {
  .item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }
  .item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border-left: none !important;
  }
  .item:last-child {
    padding-bottom: 40px;
  }
}
@media only screen and (max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}
</style>
