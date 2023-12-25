<script setup lang="ts">
import { TweenMax, Expo } from "gsap/gsap-core";

onMounted(() => {
  TweenMax.from("[data-main]", 2.5, {
    opacity: 0,
    ease: Expo.easeInOut,
  });

  TweenMax.from("[data-main-title]", 3, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.from("[data-main-animation]", 4, {
    opacity: 0,
    x: 20,
    ease: Expo.easeInOut,
  });
});
</script>

<template>
  <div
    class="h-screen max-h-screen bg-[url('@/assets/images/Main/Animation/bg.png')] bg-center flex lg:items-center relative bottom-[70px]"
    data-main
  >
    <div
      class="container h-full overflow-hidden lg:block flex items-center lg:text-left text-center lg:!w-full !w-fit"
    >
      <div class="ml-[4px] mt-[4px] flex items-center justify-between">
        <h1
          class="font-bold font-dopis text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[140%] uppercase max-w-[576px]"
          data-main-title
        >
          Делаем настольные игры
        </h1>

        <LandingMainAnimation data-main-animation />
      </div>
    </div>
  </div>

  <div class="container">
    <LandingMainCatalog class="z-20" />
  </div>
</template>
