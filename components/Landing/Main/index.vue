<template>
  <div
    class="h-screen max-h-screen bg-[url('/images/Main/Animation/bg.png')] bg-center bg-cover relative flex items-center"
  >
    <div class="container h-full">
      <div class="ml-[4px] mt-[4px] flex items-center justify-between">
        <h1
          class="font-bold font-dopis text-[80px] leading-[140%] uppercase max-w-[576px]"
        >
          Делаем настольные игры
        </h1>

        <LandingMainAnimation />
      </div>
    </div>
  </div>

  <div class="container">
    <LandingMainCatalog class="relative bottom-[95px] z-20" />

  </div>
</template>
