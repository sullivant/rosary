<script setup lang="ts">
// Navigation tabs
import {
  CNav,
  CNavItem,
  CNavLink,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CDropdown,
  CButton,
  CCollapse,
  CCard,
  CCardBody
} from '@coreui/vue'

defineEmits(['mode-change', 'hide-completed', 'reset-steps'])
const props = defineProps(['isDark', 'hideCompleted'])
let visible = true
function toggleCollapse() {
  visible = !visible
}
</script>

<template>
  <span class="appHeader">
    <CDropdown variant="nav-item">
      <CDropdownToggle color="secondary">Setup</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#" class="dropDownItem">
          <button class="controlButton" @click="$emit('mode-change')">
            <span v-if="isDark"><v-icon name="oi-sun" class="controlIcon"/></span>
            <span v-else><v-icon name="oi-moon" class="controlIcon" /></span>
          </button>          
          <span v-if="isDark" @click="$emit('mode-change')" class="controlText">Light Mode </span>
          <span v-else @click="$emit('mode-change')" class="controlText">Dark Mode </span>
        </CDropdownItem>
        <CDropdownItem href="#" class="dropDownItem">
          <button class="controlButton" @click="$emit('hide-completed')">
            <span v-if="hideCompleted"><v-icon name="px-checkbox-on" class="controlIcon"/></span>
            <span v-else><v-icon name="px-checkbox" class="controlIcon" /></span>
          </button>
          <span v-if="hideCompleted" @click="$emit('hide-completed')">Show completed </span>
          <span v-else @click="$emit('hide-completed')" class="controlText">Hide Completed </span>
        </CDropdownItem>
        <CDropdownItem href="#" class="dropDownItem">
          <button class="controlButton" @click="$emit('reset-steps')">
            <v-icon name="io-arrow-undo-circle-outline" class="controlIcon" />
          </button>
          <span @click="$emit('reset-steps')" class="controlText">Reset </span>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </span>
</template>

<style>
.controlIcon {
  vertical-align: middle;
}
.dropDownItem {
  display: flex;
}
.controlButton {
  flex-grow: 0;
  background: none;
  border: 1px black;
  padding: 1px 0px 0px 0px;
  margin-right: 1px;
  cursor: pointer;
  font-size: xx-small;
}
.controlText {
  flex-grow: 1;
}
.appHeader {
  position: fixed;
  z-index: 9999;
  top: 10px;
  left: 20px;
  /* color: #000; */
  display: flex;
  place-items: center;
}
</style>
