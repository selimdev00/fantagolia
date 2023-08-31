<script lang="ts" setup>
const items = ref([
  {
    title: "необычная история",
    description: "Эротическая карточная игра для влюбленных (18+)",
    image: "images/Main/Catalog/Item/bg-2.png",
    adult: true,
  },
  {
    title: "Веселые единороги",
    description: "Веселая карточная игра для компании друзей",
    image: "images/Main/Catalog/Item/bg.png",
    adult: false,
  },
  {
    title: "Веселые единороги",
    description: "Веселая карточная игра для компании друзей",
    image: "images/Main/Catalog/Item/bg.png",
    adult: false,
  },
  {
    title: "необычная история",
    description: "Эротическая карточная игра для влюбленных (18+)",
    image: "images/Main/Catalog/Item/bg-2.png",
    adult: true,
  },
]);
</script>

<template>
  <div class="grid grid-cols-2 gap-[20px]">
    <LandingMainCatalogItem
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    />
  </div>
</template>
