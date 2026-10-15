<script setup>

</script>

<template>
  <div class="container">
    <div class="cards">
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/nicole/nicole1.jpg" alt="">
        <div class="text">
          <span>By: tang tu</span>
          <span>At: MIAOMIAOGANG 04</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/silverWolf/silverWolf10.jpg" alt="">
        <div class="text">
          <span>By: tusu</span>
          <span>At: AnimeNorth2024</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/others/nier1.jpg" alt="">
        <div class="text">
          <span>By: NesteaC</span>
          <span>At: High Park</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/nicole/nicole3.jpg" alt="">
        <div class="text">
          <span>By: tang tu</span>
          <span>At: MIAOMIAOGANG 04</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/others/a21.jpg" alt="">
        <div class="text">
          <span>By: Huang He</span>
          <span>At: Kariya Park</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/others/kaiSa1.jpg" alt="">
        <div class="text">
          <span>By: Janna</span>
          <span>At: AnimeNorth2024</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/silverWolf/silverWolf5.jpg" alt="">
        <div class="text">
          <span>By: rtbsb520</span>
          <span>At: ZuiBeerBar</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/nicole/nicole2.jpg" alt="">
        <div class="text">
          <span>By: tang tu</span>
          <span>At: MIAOMIAOGANG 04</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/others/nier2.jpg" alt="">
        <div class="text">
          <span>By: NesteaC</span>
          <span>At: High Park</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/others/cissia1.jpg" alt="">
        <div class="text">
          <span>By: Canned Fox</span>
          <span>At: BEIJING 03</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/others/a22.jpg" alt="">
        <div class="text">
          <span>By: Lu Ren Jia</span>
          <span>At: Kariya Park</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/others/nier3.jpg" alt="">
        <div class="text">
          <span>By: Katherine</span>
          <span>At: AnimeNorth2022</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/others/cissia2.jpg" alt="">
        <div class="text">
          <span>By: Canned Fox</span>
          <span>At: BEIJING 03</span>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/images/jpg/cosplayView/others/belle1.jpg" alt="">
        <div class="text">
          <span>By: Kong Shang</span>
          <span>At: Private Studio</span>
        </div>
      </div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
      <div class="card"><span>...</span></div>
    </div>
  </div>
</template>


<style scoped>
.container {
  width: 100%;
  min-block-size: 100%;
  display: grid;
  place-content: center;
}

@keyframes slide-fade-in {
  from {
    opacity: 0;
    scale: 0.8;
    translate: 0 15vh;
  }

  to {
    opacity: 1;
    scale: 1;
    translate: 0 0;
  }
}

.cards {
  --gap: 2rem;
  --columns: 5;

  display: grid;
  gap: var(--gap);
  grid-auto-flow: dense;

  grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
  grid-auto-rows: calc(
    (90vw - (var(--columns) - 1) * var(--gap)) / var(--columns)
  );

  width: 100%;
  padding: 0 5vw;
  box-sizing: border-box;
}

.card {
  animation: slide-fade-in both;
  animation-timeline: view();
  animation-range: entry 0% contain 50%;

  position: relative;
  border-radius: 20px;
  line-height: 6;
  font-size: 32px;
  letter-spacing: 5px;
  color: rgba(238, 238, 238, 0.7);

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  box-shadow:
    inset 1px 1px 6px rgba(255, 255, 255, 0.3),
    2px 2px 15px rgba(0, 0, 0, 0.5);

  transform: scale(1);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:hover {
  transform: scale(1.05);
  z-index: 1;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.5s ease-in-out;
}

.card:hover img {
  filter: blur(2px) brightness(0.5);
}

.text {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card span {
  all: unset;
  display: block;

  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: rgba(238, 238, 238, 0.7);

  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.card:hover span {
  opacity: 1;
}

.card:nth-of-type(3n) {
  grid-column: span 2;
}

.card:nth-of-type(7n) {
  grid-column: span 2;
  grid-row: span 2;
}

.card:nth-of-type(5n) {
  grid-row: span 2;
}
</style>
