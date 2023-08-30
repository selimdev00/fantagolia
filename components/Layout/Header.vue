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
  <div class="fixed top-0 -translate-x-1/2 left-1/2 z-30 w-full bg-[#1F0134]">
    <div class="bg-transparent container">
      <div class="flex items-center justify-between py-[22px]">
        <h1
          class="text-[40px] font-semibold leading-[120%] font-montserrat grow-[0.06]"
        >
          LOGO
        </h1>

        <ul class="flex items-center gap-[52px] font-dopis">
          <li v-for="(item, index) in nav" :key="`header-nav-${index}}`">
            <nuxt-link :to="item.path" class="uppercase"
              >{{ item.label }}
            </nuxt-link>
          </li>
        </ul>

        <p
          class="font-dopis font-semibold text-lg text-pink relative left-[120px]"
        >
          +7 (495) 118-43-49
        </p>
      </div>
    </div>
  </div>
</template>
