<script setup lang="ts">
const props = defineProps(['version'])
</script>

<template>
  <div class="appFooter">
    <span class="appVersion">{{ version }}</span>
  </div>
</template>

<style>
.appFooter {
  position: fixed;
  bottom: 20px;
  left: 20px;
  font-size: xx-small;
  display: flex;
  place-items: left;
}
</style>
