<script setup lang="ts">
const images = ref([
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/1.svg"))
      .default,
    active: true,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/2.svg"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/3.svg"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/4.svg"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/5.svg"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/6.svg"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/7.svg"))
      .default,
    active: false,
  },
]);

const mouseIn = ref<boolean>(false);

const onMouseEnter = () => {
  if (mouseIn.value) return;

  mouseIn.value = true;

  let index = images.value.findIndex((e) => e.active);
  images.value[index].active = false;

  index += 1;
  const next = images.value[index];

  if (!next) index = 0;
  images.value[index].active = true;
};

const onMouseLeave = () => {
  console.log("some");

  mouseIn.value = false;
};

onMounted(() => {
  $("[data-image]").map(function () {
    $(this).ripples({
      dropRadius: 20,
      perturbance: 0.01,
      resolution: 256,
      interactive: true,
      imageUrl: $(this).data("image-src"),
    });
  });
});
</script>

<template>
  <div class="w-full h-full flex items-center justify-center relative z-20">
    <div
      class="circle__wrapper"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div
        v-for="(image, index) in images"
        :key="`image-${index}`"
        class="absolute w-full h-full transition-all duration-150"
        :class="{
          'pointer-events-none': !image.active,
        }"
      >
        <transition-fade>
          <div
            v-show="image.active"
            class="w-full h-full rounded-full"
            data-image
            :data-image-src="image.src"
          ></div>
        </transition-fade>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.circle {
  &__wrapper {
    @apply w-[340px] h-[340px] bottom-[38%] absolute;
    right: clamp(0px, 25%, 210px);
  }
}
</style>
