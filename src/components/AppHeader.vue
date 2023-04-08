<script setup lang="ts">
const props = defineProps(['isDark', 'hideCompleted'])
</script>

<template>
  <div class="appHeader">
    <span class="appLogo">Welcome!</span>
    <div class="controlSelectArea">
      <button class="controlSelectButton" @click="$emit('mode-change')">
        <span v-if="isDark"><v-icon name="oi-sun" /></span>
        <span v-else><v-icon name="oi-moon" /></span>
      </button>
    </div>

    <div class="controlSelectArea">
      <button class="controlSelectButton" @click="$emit('hide-completed')">
        <span v-if="hideCompleted"><v-icon name="px-checkbox-on" /></span>
        <span v-else><v-icon name="px-checkbox" /></span>
      </button>
    </div>
    <div class="controlSelectArea">
      <button class="controlSelectButton" @click="$emit('reset-steps')">
        <v-icon name="io-arrow-undo-circle-outline" />
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
.controlSelectArea {
  background: none;
  border: none;
  border: 1px solid rgba(138, 133, 133, 0.3);
  padding: 3px 5px;
  border-radius: 50px;
  font-size: xx-small;
  margin: 1px;
}
.controlSelectButton {
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
