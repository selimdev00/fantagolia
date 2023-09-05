<script setup lang="ts">
const images = ref([
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/1.png"))
      .default,
    active: true,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/2.png"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/3.png"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/4.png"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/5.png"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/6.png"))
      .default,
    active: false,
  },
  {
    src: (await import("@/assets/images/Main/Animation/circle-images/7.png"))
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
      class="w-[340px] h-[340px] right-[22.2%] top-[227px] absolute"
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
