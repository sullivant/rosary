<script setup lang="ts">
import { ref, computed } from 'vue'
import { version } from '../package.json'

// Dark mode toggling support
import { useDark, useToggle } from '@vueuse/core'

import '@coreui/coreui/dist/css/coreui.min.css'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import CardStack from '@/components/cards/CardStack.vue'

import {
  fatima,
  creed,
  ourfather,
  hailmary,
  glory,
  introduction
} from '@/assets/content/prayers.json'

let stepId = 0 // ID for each step in the rosary

const isDark = useDark({ selector: 'body' })
const toggleDark = useToggle(isDark)
const hideCompleted = ref(false)

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
  ])
}

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

  <AppFooter :version="version" />
</template>

<style></style>
