<script setup lang="ts">
const props = defineProps(['isDark'])
</script>

<template>
  <div class="appHeader">
    <span class="appLogo">Welcome!</span>
    <div class="modeSelectArea">
      <button class="modeSelectButton" @click="$emit('mode-change')">
        <span v-if="isDark"><v-icon name="oi-sun" /></span>
        <span v-else><v-icon name="oi-moon" /></span>
      </button>
    </div>
  </div>
</template>

<style>
.appLogo {
  display: flex;
  place-items: center;
}
.appHeader {
  position: fixed;
  top: 10px;
  left: 20px;
  /* color: #000; */
  display: flex;
  place-items: center;
}
.modeSelectArea {
  background: none;
  border: none;
  border: 1px solid rgba(138, 133, 133, 0.3);
  padding: 5px 5px;
  border-radius: 50px;
  font-size: xx-small;
  margin: 1px;
}
.modeSelectButton {
  background: none;
  border: none;
  background-color: #fff;
  padding: 0px 0px;
  cursor: pointer;
  border-radius: 50px;
  font-size: xx-small;
  margin: 1px;
}
</style>
