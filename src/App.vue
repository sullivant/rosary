<script setup lang="ts">
import { ref, computed } from 'vue'
import {version} from '../package.json'
import Step from './components/Step.vue'

let stepId = 0 // ID for each step in the rosary

const message = ref('Welcome')
const titleClass = ref('title')
const hideCompleted = ref(false)
const steps = ref([
  { id: stepId++, text: 'OurFather', done: false },
  { id: stepId++, text: 'Hail Mary', done: true },
  { id: stepId++, text: 'Glory', done: false }
])

const filteredSteps = computed(() => {
  return hideCompleted.value ? steps.value.filter((t) => !t.done) : steps.value
})

function resetSteps() {
  steps.value.forEach((e) => (e.done = false))
}

function toggleHideCompleted() {
  hideCompleted.value = !hideCompleted.value
}
</script>

<template>
  <h1 :class="titleClass">{{ message }}</h1>
  <br />

  <ul>
    <Step v-for="step in filteredSteps" :step="step" :key="step.id"></Step>
  </ul>

  <br />
  <button @click="toggleHideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
  <br />
  <button @click="resetSteps()">Reset steps</button>
  <br />
  <span class="appVersion">{{ version }}</span>
</template>

<style>
.title {
  color: cadetblue;
}
.appVersion {
  font-size: xx-small;
}
</style>
