<script setup lang="ts">
const imageIndex = ref<number>(1);
const showImage = ref<boolean>(true);

const slide = async () => {
  showImage.value = false;

  if (imageIndex.value === 7) imageIndex.value = 1;
  else imageIndex.value += 1;

  setTimeout(() => {
    showImage.value = true;
  }, 150);
};

setInterval(() => {
  slide();
}, 3000);
</script>

<template>
  <div
    class="absolute top-[215px] left-[340px] bg-purple rounded-full w-[352px] h-[352px]"
  >
    <TransitionFade>
      <img
        v-if="showImage"
        :src="`/images/Main/Animation/circle-images/${imageIndex}.png`"
        class="w-full h-full"
      />
    </TransitionFade>
  </div>
</template>
