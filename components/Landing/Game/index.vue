<script lang="ts" setup>
const usefulForItems = ref([
  {
    name: "IT сферы",
    icon: "images/Main/Game/Icons/1.png",
  },
  {
    name: "Ресторанного бизнеса",
    icon: "images/Main/Game/Icons/2.png",
  },
  {
    name: "Ритейла e-commerce",
    icon: "images/Main/Game/Icons/3.png",
  },
  {
    name: "Строительных компаний",
    icon: "images/Main/Game/Icons/4.png",
  },
  {
    name: "Рекламного бизнеса",
    icon: "images/Main/Game/Icons/5.png",
  },
  {
    name: "Прочие услуги",
    icon: "images/Main/Game/Icons/6.png",
  },
]);
</script>

<template>
  <div class="container font-dopis flex flex-col gap-20 items-start">
    <div class="flex flex-col gap-[52px] mt-[68px]">
      <div class="flex items-center justify-between gap-[340px]">
        <h1
          class="font-bold leading-[96px] text-[64px] uppercase min-w-[400px]"
        >
          Создать свою игру
        </h1>

        <p class="text-[24px] leading-[36px] opacity-80">
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

        <div class="grid grid-cols-6 gap-[20px]">
          <div
            v-for="(item, index) in usefulForItems"
            :key="`item-${index}}`"
            class="flex flex-col pt-[36px] pb-[30px] bg-violet-2 text-center items-center justify- gap-3 px-8 rounded-[8px]"
          >
            <img :src="item.icon" class="w-[86px] h-[86px]" />

            <p class="font-bold leading-[28px] text-[18px]">{{ item.name }}</p>
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
</template>
