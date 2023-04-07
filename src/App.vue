<script setup lang="ts">
import { ref, computed } from 'vue'
import { version } from '../package.json'

// Dark mode toggling support
import { useDark, useToggle } from '@vueuse/core'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import CardStack from '@/components/cards/CardStack.vue'

const isDark = useDark({ selector: 'body' })
const toggleDark = useToggle(isDark)

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
  <AppHeader @mode-change="toggleDark()" :isDark="isDark" />

  <CardStack :steps="filteredSteps" />

  <br />

  <div class="controlButtons">
    <button @click="toggleHideCompleted">
      <span v-if="hideCompleted"><v-icon name="px-checkbox-on" /></span>
      <span v-else><v-icon name="px-checkbox" /></span>
    </button>
    <button @click="resetSteps()"><v-icon name="io-arrow-undo-circle-outline" /></button>
  </div>

  <AppFooter :version="version" />
</template>

<style>
.controlButtons {
  text-align: center;
}
</style>
