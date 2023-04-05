<script lang="ts">
export default {
  props: ['step']
}
</script>

<template>
  <li class="no-bullets">
    <input type="checkbox" v-model="step.done" :id="step.id" />&nbsp;
    <label :class="{ done: step.done }" :for="step.id">{{ step.text }}</label>
    <!-- <span :class="{ done: step.done }">{{ step.text }}</span> -->
  </li>
</template>
