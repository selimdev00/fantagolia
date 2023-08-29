<script lang="ts" setup>
const nav = ref([
  {
    label: "Настольные игры",
    path: "/",
  },
  {
    label: "Оплата и доставка",
    path: "/",
  },
  {
    label: "Создать свою игру",
    path: "/",
  },
  {
    label: "FAQ",
    path: "/",
  },
]);
</script>

<template>
  <div class="bg-transparent container fixed top-0 -translate-x-1/2 left-1/2">
    <div class="flex items-center justify-between">
      <h1 class="text-[40px] font-semibold leading-[120%] font-montserrat">
        LOGO
      </h1>

      <ul class="flex items-center gap-4 font-dopis">
        <li v-for="(item, index) in nav" :key="`header-nav-${index}}`">
          <nuxt-link :to="item.path">{{ item.label }}</nuxt-link>
        </li>
      </ul>

      <p class="font-dopis text-pink">+7 (495) 118-43-49</p>
    </div>
  </div>
</template>
