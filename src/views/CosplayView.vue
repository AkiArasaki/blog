<script setup>

import MediaBar from "@/components/MediaBar.vue";
</script>

<template>
  <div class="main">
    <section style="background-color: lightyellow">1</section>
    <section style="background-color: lightpink">2</section>
    <section style="background-color: lightblue">3</section>
    <section>
      <div class="content">

      </div>
      <MediaBar/>
    </section>
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
}
.content {
  height: 200px;
}
</style>
