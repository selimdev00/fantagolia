<script lang="ts" setup>
import { TweenMax, Expo, Power3 } from "gsap/gsap-core";

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
    path: "/about",
  },
  {
    label: "FAQ",
    path: "/",
  },
]);

onMounted(() => {
  TweenMax.from("[data-header-logo]", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(
    "[data-header-nav-item]",
    1,
    {
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut,
    },
    0.08
  );

  TweenMax.from("[data-header-phone]", 2, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });
});
</script>

<template>
  <div class="z-30 relative w-full bg-transparent">
    <div class="bg-transparent container">
      <div class="flex items-center justify-between py-[22px]">
        <nuxt-link to="/"
          ><h1
            class="text-[40px] font-semibold leading-[120%] font-montserrat grow-[0.06]"
            data-header-logo
          >
            LOGO
          </h1></nuxt-link
        >

        <ul class="flex items-center gap-[52px] font-dopis">
          <li
            v-for="(item, index) in nav"
            :key="`header-nav-${index}}`"
            data-header-nav-item
          >
            <nuxt-link :to="item.path" class="uppercase"
              >{{ item.label }}
            </nuxt-link>
          </li>
        </ul>

        <p class="font-dopis font-medium text-lg text-pink" data-header-phone>
          +7 (495) 118-43-49
        </p>
      </div>
    </div>
  </div>
</template>
