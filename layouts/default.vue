<script setup lang="ts">
const { loading } = useLoading();
</script>

<template>
  <div class="bg-[#1F0135]">
    <Loading v-if="loading" />

    <div
      :class="{ 'opacity-0': loading, 'opacity-100': !loading }"
      class="transition-all duration-300"
    >
      <div class="min-h-screen text-white">
        <LayoutHeader />

        <slot />

        <LayoutFooter />
      </div>
    </div>
  </div>
</template>
