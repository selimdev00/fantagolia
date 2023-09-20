<script setup lang="ts">
const { loading } = useLoading();
</script>

<template>
  <div class="bg-[#1F0135] min-h-screen">
    <div v-show="!loading" class="transition-all duration-300">
      <div class="min-h-screen text-white">
        <LayoutHeader />

        <slot />

        <LayoutFooter />
      </div>
    </div>
  </div>
</template>
