<script setup lang="ts">
import { ref, computed } from 'vue'
import { version } from '../package.json'
import Step from './components/Step.vue'

let stepId = 0 // ID for each step in the rosary

const hideCompleted = ref(false)
const steps = ref([
  { id: stepId++, text: 'First', done: false },
  { id: stepId++, text: 'Second', done: true },
  { id: stepId++, text: 'Third', done: false }
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
  <div class="logo">Welcome!</div>
  <span class="appVersion">{{ version }}</span>
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
</template>

<style>
.title {
  color: cadetblue;
}
.logo {
  position: fixed;
  top: 20px;
  left: 20px;
  color: #000;
  display: flex;
  place-items: center;
}
.appVersion {
  position: fixed;
  bottom: 20px;
  left: 20px;
  font-size: xx-small;
  color: #000;
  display: flex;
  place-items: center;
}
</style>
