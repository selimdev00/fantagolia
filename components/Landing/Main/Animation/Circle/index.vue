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
  mouseIn.value = false;
};

onMounted(() => {
  setTimeout(() => {
    $("[data-image]").map(function () {
      $(this).ripples({
        dropRadius: 20,
        perturbance: 0.01,
        resolution: 256,
        interactive: true,
        imageUrl: $(this).data("image-src"),
      });
    }, 50);
  }, 500);
});
</script>

<template>
  <div class="w-full h-full flex items-center justify-center relative z-20">
    <div
      class="flex flex-col items-center justify-center absolute left-10 w-[inherit]"
    >
      <div
        class="w-[340px] h-[340px] relative top-[68px] z-10"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <LandingMainAnimationBlueThunder class="top-[-50px] right-[-80px]" />

        <LandingMainAnimationPurpleThunder
          class="bottom-[-80px] left-[-50px]"
        />

        <transition-group>
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
        </transition-group>
      </div>

      <div class="w-[800px]">
        <img
          class="h-full w-full relative left-2"
          src="@/assets/images/Main/Animation/circle/footer.png"
        />
      </div>
    </div>
  </div>
</template>
