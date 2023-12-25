<script lang="ts" setup>
const contacts = ref([
  {
    label: `<span class=line>+7</span> (<span class=line>495</span>) <span class=line>118-43-49</span>`,
    link: "tel:+7 (495) 118-43-49",
  },
  {
    label: `<span class="line">+7</span> (<span class="line">968</span>) <span class="line">856-65-62</span>`,
    link: "tel:+7 (968) 856-65-62",
  },
  {
    label: `<span class="line">info</span>@<span class="line">365m</span>g.<span class="line">ru</span>`,
    link: "mailto:info@365mg.ru",
  },
]);

const socials = ref([
  {
    icon: "ri:whatsapp-fill",
    color: "whatsapp",
  },
  {
    icon: "cib:telegram-plane",
    color: "telegram",
  },
  {
    icon: "mdi:skype",
    color: "skype",
  },
]);

const sectionLinks = ref([
  {
    title: "Создать свою игру",
    text: "Мы сможем предложить лучшее решение с расчетом стоимости и сроков",
    link: "/",
  },
  {
    title: "Скачать презентацию",
    text: "Поможет вам быстро ознакомиться с портфолио и начать работу",
    link: "/",
  },
]);

const bottomNav = ref([
  {
    label: "Политика конфиденциальности",
    path: "#",
  },
  {
    label: "Правила cookies",
    path: "#",
  },
]);
</script>

<template>
  <client-only>
    <footer class="font-dopis">
      <div
        class="mt-[182px] py-[110px] border-t border-violet-3 bg-[url('@/assets/images/Layout/castle.png')] bg-no-repeat"
      >
        <div
          class="container grid lg:grid-cols-[1.47fr_1fr_1.19fr] lg:gap-0 gap-[4rem]"
        >
          <div class="flex flex-col items-start gap-[150px]">
            <h1
              class="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:leading-[96px] uppercase max-w-[300px]"
            >
              Свяжитесь с нами
            </h1>

            <button
              class="py-[18px] px-[60px] bg-pink rounded-full font-bold text-[18px] font-dopis"
            >
              Связаться

              <Icon name="iconamoon:arrow-top-right-1" class="text-[24px]" />
            </button>
          </div>

          <div class="flex flex-col gap-[110px] py-6 pl-[32px]">
            <ul class="flex flex-col gap-[50px]">
              <li
                v-for="(item, index) in contacts"
                :key="`footer-contact-${index}`"
                class="text-[24px] leading-[36px] tracking-[0.5px]"
              >
                <nuxt-link
                  class="group"
                  :to="item.link"
                  v-html="item.label"
                ></nuxt-link>
              </li>
            </ul>

            <ul class="flex gap-[28px] items-center">
              <li
                v-for="(item, index) in socials"
                :key="`social-${index}`"
                class="w-[64px] h-[64px] flex items-center justify-center rounded-full cursor-pointer bg-violet-2 transition-all duration-200"
                :class="item.color"
              >
                <Icon :name="item.icon" class="text-[26px]" />
              </li>
            </ul>
          </div>

          <div
            class="border-l border-violet-3 lg:pl-[125px] pl-[32px] flex flex-col gap-[70px]"
          >
            <div
              v-for="(item, index) in sectionLinks"
              :key="`section-link-${index}`"
              class="flex flex-col gap-4 py-6"
            >
              <h3 class="font-bold text-[24px] leading-[36px]">
                <nuxt-link
                  :to="item.link"
                  class="text-white hover:text-pink transtion-all duration-200"
                  >{{ item.title }} <Icon name="iconamoon:arrow-top-right-1"
                /></nuxt-link>
              </h3>

              <p class="text-gray-text-2 font-light text-[18px] leading-[32px]">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-black py-[24px]">
        <div
          class="container text-gray-text-2 text-[18px] flex flex-wrap gap-8 items-center justify-between"
        >
          <p>Название сайта © 2023</p>

          <ul
            class="flex flex-wrap items-center lg:gap-20 gap-6 font-light leading-[32px]"
          >
            <li
              v-for="(item, index) in bottomNav"
              :key="`bottom-nav-${index}}`"
            >
              <nuxt-link :to="item.path" class="text-gray-text-3">{{
                item.label
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </client-only>
</template>

<style lang="scss">
span.line {
  @apply relative;
  &::after {
    content: "";
    @apply absolute bg-white h-[1px] w-full -bottom-[9px] left-0 opacity-100 transition-all duration-200 group-hover:opacity-0;
  }
}

.skype {
  @apply hover:bg-skype;
}

.whatsapp {
  @apply hover:bg-whatsapp;
}

.telegram {
  @apply hover:bg-telegram;
}
</style>
