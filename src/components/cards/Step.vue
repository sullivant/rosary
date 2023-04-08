<script setup lang="ts">
import { ref, computed } from 'vue'
// Cards
import { CCard, CCardBody, CCardText, CCardImage, CCardHeader, CRow, CCol } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'

const props = defineProps(['step', 'isDark'])

const vars = computed((isDark) => {
  return props.isDark ? 'dark' : 'light'
})
</script>

<template>
  <CCard class="mb-4" style="width: 100%" :color="vars">
    <CCardHeader> {{ step.title }}</CCardHeader>
    <CRow>
      <CCardBody>
        <CCardText>
          <!-- <input type="checkbox" v-model="step.done" :id="step.id" />&nbsp; -->
          <!-- <label class="step" :class="{ done: step.done }" :for="step.id">{{ step.text }}</label> -->
          <span class="prayer" :class="{ done: step.done }" :for="step.id">{{ step.text }}</span>
        </CCardText>
      </CCardBody>
    </CRow>
  </CCard>
</template>

<style>
.done {
  text-decoration: line-through;
}

.prayer {
  font-size: xx-small
}
</style>
