<script lang="ts" setup>
const MAX_INDEX = 4;
const imageIndex = ref<number>(1);
const showImage = ref<boolean>(false);

const thunder = () => {
  setTimeout(() => {
    showImage.value = false;
  }, 150);
};

const doubleThunder = () => {
  setTimeout(() => {
    imageIndex.value += 1;

    setTimeout(() => {
      showImage.value = false;
    }, 150);
  }, 150);
};

const slide = () => {
  showImage.value = true;
  if (imageIndex.value === MAX_INDEX) imageIndex.value = 1;
  else imageIndex.value += 1;

  if (imageIndex.value === 3) {
    doubleThunder();
  } else {
    thunder();
  }
};

setTimeout(() => {
  setInterval(() => {
    slide();
  }, 2500);
}, 2100);
</script>

<template>
  <div
    class="absolute w-[275px] h-[300px] bg-[url('/images/Main/Animation/purple-thunder/bg.png')] bg-[left] left-[280px] bottom-[300px]"
    @click="handleClick"
  >
    <transition-fade>
      <img
        v-if="showImage"
        :src="`/images/Main/Animation/purple-thunder/${imageIndex}.png`"
        alt=""
      />
    </transition-fade>
  </div>
</template>
