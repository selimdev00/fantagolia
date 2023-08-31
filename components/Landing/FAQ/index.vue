<script setup lang="ts">
const questions = ref([
  {
    question: "В какие регионы вы доставляете игры?",
    answer:
      "Игрок выполняет любые 2 фазы в любом порядке. Т.е. может вначале применить магию, а потом сыграть фазу обновления. Действия могу повторяться. В конце хода игрок берет карту из любой колоды. Действие обязательно. Далее игрок передает ход по часовой стрелке. Если в конце хода в руке остается более 7 карт - игрок сбрасывает в спопку сброса лишние карты и передает ход.",
    active: false,
  },
  {
    question: "Как играть в ваши игры?",
    answer:
      "Игрок выполняет любые 2 фазы в любом порядке. Т.е. может вначале применить магию, а потом сыграть фазу обновления. Действия могу повторяться. В конце хода игрок берет карту из любой колоды. Действие обязательно. Далее игрок передает ход по часовой стрелке. Если в конце хода в руке остается более 7 карт - игрок сбрасывает в спопку сброса лишние карты и передает ход.",
    active: true,
  },  
  {
    question: "Какой срок создания своей игры?",
    answer:
      "Игрок выполняет любые 2 фазы в любом порядке. Т.е. может вначале применить магию, а потом сыграть фазу обновления. Действия могу повторяться. В конце хода игрок берет карту из любой колоды. Действие обязательно. Далее игрок передает ход по часовой стрелке. Если в конце хода в руке остается более 7 карт - игрок сбрасывает в спопку сброса лишние карты и передает ход.",
    active: false,
  }, 
  {
    question: "Есть ли скидка для оптовых покупателей?",
    answer:
      "Игрок выполняет любые 2 фазы в любом порядке. Т.е. может вначале применить магию, а потом сыграть фазу обновления. Действия могу повторяться. В конце хода игрок берет карту из любой колоды. Действие обязательно. Далее игрок передает ход по часовой стрелке. Если в конце хода в руке остается более 7 карт - игрок сбрасывает в спопку сброса лишние карты и передает ход.",
    active: false,
  },
  {
    question: "Ваши игры лицензированы?",
    answer:
      "Игрок выполняет любые 2 фазы в любом порядке. Т.е. может вначале применить магию, а потом сыграть фазу обновления. Действия могу повторяться. В конце хода игрок берет карту из любой колоды. Действие обязательно. Далее игрок передает ход по часовой стрелке. Если в конце хода в руке остается более 7 карт - игрок сбрасывает в спопку сброса лишние карты и передает ход.",
    active: false,
  },
  {
    question: "Сколько это стоит?",
    answer:
      "Игрок выполняет любые 2 фазы в любом порядке. Т.е. может вначале применить магию, а потом сыграть фазу обновления. Действия могу повторяться. В конце хода игрок берет карту из любой колоды. Действие обязательно. Далее игрок передает ход по часовой стрелке. Если в конце хода в руке остается более 7 карт - игрок сбрасывает в спопку сброса лишние карты и передает ход.",
    active: false,
  },
]);

const toggleQuestion = (index: number): void => {
  questions.value[index].active = !questions.value[index].active;
};
</script>

<template>
  <div class="mt-[160px]">
    <div class="container font-dopis flex flex-col gap-[29px]">
      <h1 class="font-bold text-[64px] leading-[96px]">FAQ</h1>

      <div class="grid grid-cols-2">
        <ul class="flex flex-col">
          <li
            v-for="(item, index) in questions"
            :key="`faq-item-${index}}`"
            class="group flex flex-col pt-[26px] max-h-[113px] linear transition-all text-gray-text"
            :class="{ 'is-active !max-h-full': item.active }"
          >
            <div
              class="flex w-full justify-between items-center cursor-pointer group-[.is-active]:text-white"
              @click="toggleQuestion(index)"
            >
              <h2 class="text-[28px] leading-[60px]">
                {{ item.question }}
              </h2>

              <span class="text-[42px] w-[42px] h-[42px] relative">
                <transition-fade>
                  <Icon
                    v-if="item.active"
                    name="mdi:minus"
                    class="absolute top-0 left-0"
                  />
                  <Icon v-else name="mdi:plus" class="absolute top-0 left-0" />
                </transition-fade>
              </span>
            </div>

            <p
              class="font-light leading-[32px] pb-[26px] text-[18px] border-b border-violet-3 transition-all ease-linear duration-300 max-h-0 overflow-hidden group-[.is-active]:max-h-full max-w-[90%]"
            >
              <p class="py-[26px]">
                {{ item.answer }}
              </p>
            </p>
          </li>
        </ul>

        <img
          class="max-w-[unset] w-[900px] relative bottom-[100px]"
          src="@/assets/images/Main/FAQ/book.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
