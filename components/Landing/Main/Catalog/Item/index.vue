<script lang="ts" setup>
interface CatalogItemProps {
  item: any;
}

const props = defineProps<CatalogItemProps>();
</script>

<template>
  <li class="flex h-[341px] py-14 md:px-[60px] px-[30px] relative font-dopis">
    <img
      :src="props.item.image"
      class="absolute left-0 top-0 w-full h-full object-cover"
    />

    <div class="flex flex-col max-w-[300px] gap-[9px] z-10">
      <h2 class="text-[36px] leading-[54px] font-bold uppercase font-dopis">
        {{ props.item.title }}
        <img
          class="inline relative bottom-1 left-1 object-cover"
          src="@/assets/images/Main/Catalog/Item/adult.png"
          alt=""
        />
      </h2>

      <p class="text-[16px] leading-[28px] opacity-80 max-w-[215px]">
        {{ props.item.description }}
      </p>

      <div class="flex flex-col mt-[16px]">
        <p class="line-through text-gray-text text-[12px] leading-[9px]">
          900 ₽
        </p>

        <p class="font-bold text-[26px] leading-[41.6px]">500 ₽</p>
      </div>
    </div>
  </li>
</template>
