<script lang="ts" setup>
const usefulForItems = ref([
  {
    name: "IT сферы",
    icon: await import("@/assets/images/Game/Icons/1.svg"),
  },
  {
    name: "Ресторанного бизнеса",
    icon: await import("@/assets/images/Game/Icons/2.svg"),
  },
  {
    name: "Ритейла e-commerce",
    icon: await import("@/assets/images/Game/Icons/3.svg"),
  },
  {
    name: "Строительных компаний",
    icon: await import("@/assets/images/Game/Icons/4.svg"),
  },
  {
    name: "Рекламного бизнеса",
    icon: await import("@/assets/images/Game/Icons/5.svg"),
  },
  {
    name: "Прочие услуги",
    icon: await import("@/assets/images/Game/Icons/6.svg"),
  },
]);
</script>

<template>
  <div class="mt-24">
    <div class="container font-dopis flex flex-col gap-20 items-start">
      <div class="flex flex-col gap-[52px] mt-[68px]">
        <div
          class="flex lg:flex-row flex-col items-center justify-between xl:gap-[340px] gap-[40px]"
        >
          <h1
            class="font-bold leading-[96px] lg:text-[64px] md:text-[44px] uppercase md:min-w-[400px]"
          >
            Создать свою игру
          </h1>

          <p class="lg:text-[24px] md:text-[18px] leading-[36px] opacity-80">
            В 365 Media Group мы занимаемся внедрением механик геймификации в
            бизнес. Это позволяет нашим клиентам повышать свою продуктивность,
            более эффективно достигать поставленных целей. Закажите разработку
            игры по вашим правилам прямо сейчас!
          </p>
        </div>

        <div class="flex flex-col gap-10">
          <p class="font-bold leading-[28px] text-[18px]">
            Геймификация может быть полезна для:
          </p>

          <div class="grid lg:grid-cols-6 sm:grid-cols-3 gap-[20px]">
            <div
              v-for="(item, index) in usefulForItems"
              :key="`item-${index}}`"
              class="flex flex-col pt-[36px] pb-[30px] bg-violet-2 text-center items-center justify-center gap-12 px-8 rounded-[8px]"
            >
              <img :src="item.icon.default" class="w-[52px] h-[52px]" />

              <p class="font-bold leading-[28px] text-[18px]">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        class="py-[18px] px-[84px] bg-pink rounded-full font-bold text-[18px] font-dopis"
      >
        Оставить заявку
      </button>
    </div>
  </div>
</template>
