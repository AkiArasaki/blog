<script setup>

</script>

<template>
  <div class="container">
    <div class="card">
      <div class="image">
        <img src="@/assets/images/jpg/projectView/project-utahime.jpg" alt="">
      </div>
      <h1>Utahime</h1>
      <h2>A discord music bot</h2>
      <p>A easy to deploy discord music bot,
        towards discord users with less experience working with vps and programming.</p>
      <div class="button" style="--i:1">
        <a href="https://github.com/AkiArasaki/utahime">Learn More</a>
      </div>
    </div>
    <div class="card">
      <div class="image">
        <img src="../assets/images/jpg/projectView/project-eww.jpg" alt="">
      </div>
      <h1>EWW</h1>
      <h2>An APP for those allergic</h2>
      <p>A product of heckthon: Product Design Spring 2024,
        it is an prototype of an mobile APP for those who have allergies in order to protect them from allergens.</p>
      <div class="button" style="--i:2">
        <a href="https://www.figma.com/proto/GDKGZHmSSaCx4PwxmGFoQF/pds?node-id=465-3408&starting-point-node-id=465%3A3408&t=NA3IJKdXrmIMZtBH-1">Learn More</a>
      </div>
    </div>
    <div class="card">
      <div class="image">
        <img src="@/assets/images/jpg/projectView/project-igiari.jpg" alt="">
      </div>
      <h1>Igiari</h1>
      <h2>An APP to OBJECTION!</h2>
      <p>An Ace Attorney Inspired APP, allows you to execute OBJECTION!
        anything at any time, any where like Phoenix Wright.</p>
      <div class="button" style="--i:3">
        <a href="https://github.com/AkiArasaki/Igiari">Learn More</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3vw;
  padding: 1vw;
}
.card {
  position: relative;
  width: 300px;
  height: 450px;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eee;
  box-shadow: inset 1px 1px 6px rgba(255, 255, 255, 0.3), 2px 2px 15px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
  transition: 0.5s;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
  overflow: hidden;
  transition: 0.5s;
}
.card:hover {
  box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.7), 4px 4px 25px rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(7px);
}
.card:hover .image {
  top: 30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}
.image::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, rgba(34, 34, 34, 0.7));
}
.card h1 {
  position: absolute;
  top: 300px;
  transition: 0.5s;
}
.card:hover h1 {
  top: 170px;
}
.card h2 {
  margin-top: 220px;
  width: 80%;
  border-bottom: 1px solid rgba(238, 238, 238, 0.3);
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.card p {
  width: 90%;
  text-indent: 32px;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 20px;
}
.button {
  padding: 8px 32px;
  border-radius: 8px;
  position: relative;
  filter: hue-rotate(calc(var(--i) * 60deg));
}
.button a {
  font-size: 14px;
  color: rgba(238, 238, 238, 0.7);
  text-decoration: none;
}
.button:hover {
  background-color: rgba(221, 160, 221, 0.5);
  color: rgba(0, 0, 0, 0.9);
  box-shadow: 0 0 30px rgba(221, 160, 221, 0.5);
  transition-delay: 0.1s;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: rgba(238, 238, 238, 0.5);
  font-size: 1.5rem;
}
.button:hover a {
  color: rgba(0, 0, 0, 0.9);
}
.button:hover a::before, .button:hover a::after{
  width: 98%;
  height: 97%;
  border-radius: 8px;
}
a::before, a::after {
  content: "";
  position: absolute;
  width: 1vw;
  height: 1vw;
  border: 2px solid rgba(221, 160, 221, 0.5);
  transition: all 0.3s;
}
a::before {
  top: 0;
  left: 0;
  border-right: 0;
  border-bottom: 0;
}
a::after {
  bottom: 0;
  right: 0;
  border-left: 0;
  border-top: 0;
}
</style>
