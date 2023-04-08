<script setup lang="ts">
import { ref, computed } from 'vue'
import { version } from '../package.json'

// Dark mode toggling support
import { useDark, useToggle } from '@vueuse/core'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import CardStack from '@/components/cards/CardStack.vue'

let stepId = 0 // ID for each step in the rosary
const isDark = useDark({ selector: 'body' })
const toggleDark = useToggle(isDark)
const hideCompleted = ref(false)
const steps = ref([
  { id: stepId++, title: 'Step 1', text: 'First', done: false },
  { id: stepId++, title: 'Step 2', text: 'Second', done: true },
  { id: stepId++, title: 'Step 3', text: 'Third', done: false }
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
  <AppHeader
    @reset-steps="resetSteps"
    @hide-completed="toggleHideCompleted"
    @mode-change="toggleDark()"
    :isDark="isDark"
    :hideCompleted="hideCompleted"
  />

  <CardStack :steps="filteredSteps" :isDark="isDark" />

  <br />

  <AppFooter :version="version" />
</template>

<style></style>
