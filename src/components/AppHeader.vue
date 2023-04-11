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
  CCard,CCardBody
} from '@coreui/vue'

defineEmits(['mode-change', 'hide-completed', 'reset-steps'])
const props = defineProps(['isDark', 'hideCompleted'])
let visible = true;
function toggleCollapse() {
  visible = !visible;
}

</script>

<template>
  <span class="appHeader">
    <CDropdown variant="nav-item" dark>
      <CDropdownToggle color="secondary">Setup</CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem href="#">
          <span v-if="isDark" @click="$emit('mode-change')">Light Mode</span>
          <span v-else @click="$emit('mode-change')">Dark Mode</span>
          <button class="controlSelectButton" @click="$emit('mode-change')">
            <span v-if="isDark"><v-icon name="oi-sun" /></span>
            <span v-else><v-icon name="oi-moon" /></span>
          </button>
        </CDropdownItem>
        <CDropdownItem href="#">
          <span v-if="hideCompleted" @click="$emit('hide-completed')">Show completed</span>
          <span v-else @click="$emit('hide-completed')">Hide Completed</span>
          <button class="controlSelectButton" @click="$emit('hide-completed')">
            <span v-if="hideCompleted"><v-icon name="px-checkbox-on" /></span>
            <span v-else><v-icon name="px-checkbox" /></span>
          </button>
        </CDropdownItem>
        <CDropdownItem href="#">
          <span @click="$emit('reset-steps')">Reset</span>
          <button class="controlSelectButton" @click="$emit('reset-steps')">
            <v-icon name="io-arrow-undo-circle-outline" />
          </button>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </span>
</template>

<style>
.appLogo {
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
