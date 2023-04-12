<script setup lang="ts">
import { ref, computed } from 'vue'
import Step from '@/components/cards/Step.vue'

// Swiper cards
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/scrollbar'

const props = defineProps(['steps', 'isDark'])
const modules = [EffectCards, Scrollbar]

const onSlideChange = (swiper: any): void => {
  console.log(swiper)
}
</script>

<template>
  <swiper
    :rewind="true"
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :scrollbar="{ hide: true }"
    @slideChange="onSlideChange"
    class="swiper"
  >
    <swiper-slide v-for="step in steps" @click="step.done = !step.done">
      <Step :step="step" :key="step.id" :isDark="isDark"></Step>
    </swiper-slide>
  </swiper>
</template>

<style>
.swiper {
  width: 240px;
  height: 420px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  /* font-size: 22px; */
  font-weight: normal;
  /* color: #fff; */
  background-color: rgb(69, 69, 79);
}
</style>
