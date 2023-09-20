<script lang="ts" setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const items = ref([
  {
    title: "необычная история",
    description: "Эротическая карточная игра для влюбленных (18+)",
    image: (await import("@/assets/images/Main/Catalog/Item/bg-2.png")).default,
    adult: true,
  },
  {
    title: "Веселые единороги",
    description: "Веселая карточная игра для компании друзей",
    image: (await import("@/assets/images/Main/Catalog/Item/bg.png")).default,
    adult: false,
  },
  {
    title: "Веселые единороги",
    description: "Веселая карточная игра для компании друзей",
    image: (await import("@/assets/images/Main/Catalog/Item/bg.png")).default,
    adult: false,
  },
  {
    title: "необычная история",
    description: "Эротическая карточная игра для влюбленных (18+)",
    image: (await import("@/assets/images/Main/Catalog/Item/bg-2.png")).default,
    adult: true,
  },
]);
</script>

<template>
  <div class="grid grid-cols-2 gap-[20px]" ref="wrapper">
    <LandingMainCatalogItem
      v-for="(item, index) in items"
      :key="`catalog-item-${index}`"
      :item="item"
      data-aos="fade-up"
    />
  </div>
</template>
