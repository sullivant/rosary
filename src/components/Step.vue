<script setup lang="ts">
const props = defineProps(['step'])
</script>

<template>
  <li class="no-bullets" :step="step" :key="step.id">
    <input type="checkbox" v-model="step.done" />&nbsp;
    <label :class="{ done: step.done }" :for="step.id">{{ step.text }}</label>
  </li>
</template>
