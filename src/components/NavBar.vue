<script setup>

</script>

<template>
  <div class="bar">
    <div class="content"></div>
    <div class="glass">
      <div class="title">
        <h2>Aki Arasaki</h2>
      </div>
      <div class="tabs">
        <div></div>
        <div class="button" style="--i:1">
          <router-link to="/">Home</router-link>
        </div>
        <div class="button" style="--i:2">
          <router-link to="/project">Project</router-link>
        </div>
        <div class="button" style="--i:3">
          <router-link to="/cosplay">Cosplay</router-link>
        </div>
        <div class="button" style="--i:4">
          <router-link to="/whisper">Whisper</router-link>
        </div>
      </div>
      <div class="language">
        <h2>EN / CH / JP</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bar {
  height: 100px;
  width: 100vw;
  position: fixed;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.content {
  position: absolute;
  width: 95vw;
  height: 100px;
}
.glass {
  position: absolute;
  width: 95vw;
  height: 80px;
  border-radius: 20px;
  margin-top: 2vh;
  color: #eee;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  box-shadow: inset 1px 1px 6px rgba(255, 255, 255, 0.3), 2px 2px 15px rgba(0, 0, 0, 0.5);
  animation: am1 ease-out 1s 0.2s backwards;
  transition: 0.5s;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
}
.glass:hover {
  box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.7), 4px 4px 25px rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(7px);
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
.title {
  margin: auto auto;
  color: rgba(238, 238, 238, 0.3);
  transition: 0.5s;
}
.glass:hover .title {
  color: rgba(238, 238, 238, 0.7);
}
.tabs {
  margin: auto auto;
  display: grid;
  grid-template-columns: 7fr 1fr 1fr 1fr 1fr;
  column-gap: 5vw;
}
.button {
  height: 60px;
  width: 6vw;
  position: relative;
  transition: all 0.3s;
  filter: hue-rotate(calc(var(--i) * 60deg));
  border-radius: 20px;
  color: rgba(238, 238, 238, 0.5);
  align-content: center;
  text-align: center;
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
  border-radius: 20px;
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
.language {
  margin: auto auto;
  color: rgba(238, 238, 238, 0.3);
}
</style>
