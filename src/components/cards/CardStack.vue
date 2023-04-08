<script setup lang="ts">
import Step from '@/components/cards/Step.vue'

// Swiper cards
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'

const props = defineProps(['steps', 'isDark'])
const modules = [EffectCards]
</script>

<template>
  <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="swiper">
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
