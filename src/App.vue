<script setup lang="ts">
import { ref, computed } from 'vue'
import { version } from '../package.json'

// Dark mode toggling support and other nifty coreui stuff
import { useDark, useToggle } from '@vueuse/core'
import '@coreui/coreui/dist/css/coreui.min.css'

// Swiper cards
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards, Keyboard} from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'

import { CProgress, CProgressBar } from '@coreui/vue'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import Step from '@/components/cards/Step.vue'

import {
  fatima,
  creed,
  ourfather,
  hailmary,
  glory,
  introduction
} from '@/assets/content/prayers.json'

let stepId = 0 // ID for each step in the rosary

// Swiper config
let thisSwiper = ref(Swiper);
let activeIndex = ref(0);
const modules = [EffectCards, Keyboard]

const onSwiper = (swiper: any) => {
  thisSwiper.value = swiper;
  // console.log(swiper);
}

function onSlideChange() {
  activeIndex.value = thisSwiper.value.activeIndex;
}

function resetSteps() {
  steps.value.forEach((e) => (e.done = false))
  thisSwiper.value.setProgress(0, 500);
}

// UI configuration
const isDark = useDark({ selector: 'body' })
const toggleDark = useToggle(isDark)
const hideCompleted = ref(false)

// Generation of all cards / steps
const steps = getSteps()
function getSteps() {
  return ref([
    { id: stepId++, done: false, prayer: introduction },
    { id: stepId++, done: false, prayer: creed, icon: 'la-cross-solid' },
    { id: stepId++, done: false, prayer: ourfather },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: glory },
    {
      id: stepId++,
      done: false,
      prayer: { title: 'First Decade', text: '(Mystery here)' },
      cardColor: 'info'
    },
    { id: stepId++, done: false, prayer: ourfather },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: hailmary },
    { id: stepId++, done: false, prayer: glory },
    { id: stepId++, done: false, prayer: fatima },
    {
      id: stepId++,
      done: false,
      prayer: { title: 'End', text: 'Thank you.' },
      cardColor: 'info'
    }
  ]);
}

const filteredSteps = computed(() => {
  return hideCompleted.value ? steps.value.filter((t) => !t.done) : steps.value
})

function toggleHideCompleted() {
  hideCompleted.value = !hideCompleted.value
}

const getProgress = computed(() => {
  return ((activeIndex.value + 1) /  steps.value.length) * 100;
})


</script>

<template>
  <AppHeader
    @reset-steps="resetSteps"
    @hide-completed="toggleHideCompleted"
    @mode-change="toggleDark()"
    :isDark="isDark"
    :hideCompleted="hideCompleted"
  />
<!-- 
  <CardStack @index-change="updateCurrentIndex" 
   :steps="filteredSteps" :isDark="isDark" /> -->

   <Swiper
    :rewind="true"
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    :keyboard="{ enabled: true }"
    :navigation="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="swiper" id="rosarySwiper" ref="rosarySwiper"
  >
    <swiper-slide v-for="step in filteredSteps" @click="step.done = !step.done">
      <Step :step="step" :key="step.id" :isDark="isDark"></Step>
    </swiper-slide>
  </Swiper>
  <br />
  <CProgress class="mb-2">
    <CProgressBar :value="getProgress" color="success" animated variant="striped" />
  </CProgress>

  <!-- <br />
  Current Prayer: {{ activeIndex + 1 }} / {{ steps.length }} -->
  <AppFooter :version="version" />
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
