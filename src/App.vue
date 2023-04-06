<script setup lang="ts">
import { ref, computed } from 'vue'
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
  // return hideCompleted ? steps.filter((t) => !t.done) : steps.value
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
    <!-- <li class="no-bullets" v-for="step in filteredSteps" :step="step" :key="step.id">
    <input type="checkbox" v-model="step.done" />&nbsp;
    <label :class="{ done: step.done }" >{{ step.text }}</label>
    </li> -->
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
.done {
  text-decoration: line-through;
}
.no-bullets {
  list-style-type: none;
}
</style>
