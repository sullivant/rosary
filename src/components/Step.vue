<script setup lang="ts">
const props = defineProps(['step'])
</script>

<template>
  <li class="no-bullets">
    <input type="checkbox" v-model="step.done" :id="step.id" />&nbsp;
    <label :class="{ done: step.done }" :for="step.id">{{ step.text }}</label>
  </li>
</template>

<style>
.done {
  text-decoration: line-through;
}
.no-bullets {
  list-style-type: none;
}
</style>
