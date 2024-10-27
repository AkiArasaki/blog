<script>
export default {
  props: {
    hueRotation: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    linkTo: {
      type: String,
      required: true
    }
  },
  computed: {
    hue() {
      return {
        "--i": this.hueRotation
      }
    },
    width() {
      return {
        "--j": 20
      }
    }
  }
}
</script>

<template>
  <div class="container" >
    <div class="text">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </div>
    <div class="button-box">
      <div class="button" :style="hue">
        <router-link :to=linkTo>Learn More</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 25vw;
  height: 450px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.text {
  text-align: center;
}
.text h1 {
  padding: 2vh;
  border-bottom: 1px solid rgba(238, 238, 238, 0.3);
}
.text p {
  padding: 2vh;
}
.button-box {
  display: flex;
  align-items: center;
  justify-content: center;
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
