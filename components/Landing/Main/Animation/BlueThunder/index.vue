<script lang="ts" setup>
const MAX_INDEX = 4;

const images = ref([
  (await import("@/assets/images/Main/Animation/blue-thunder/1.svg")).default,
  (await import("@/assets/images/Main/Animation/blue-thunder/2.svg")).default,
  (await import("@/assets/images/Main/Animation/blue-thunder/3.svg")).default,
  (await import("@/assets/images/Main/Animation/blue-thunder/4.svg")).default,
]);
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
}, 100);
</script>

<template>
  <div
    class="absolute w-[275px] h-[300px] bg-[url('@/assets/images/Main/Animation/blue-thunder/bg.png')] bg-[left] bg-contain right-[120px] top-[200px] mix-blend-screen"
  >
    <img v-if="showImage" :src="images[imageIndex]" alt="" />
  </div>
</template>

<style lang="scss"></style>
