<script setup lang="ts">
import { ref, computed } from 'vue'
// Cards
import { CCard, CCardBody, CCardText, CCardImage, CCardHeader, CRow, CCol } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'

const props = defineProps(['step', 'isDark'])

const vars = computed((isDark) => {
  return props.isDark ? 'dark' : 'light'
})

function stepIcon(step: any) {
  return step.icon;
}

</script>

<template>
  <!-- LaCrossSolid -->
  <CCard class="h-100 d-inline-block w-100" :color="vars">
    <CCardHeader><v-icon v-if="step.icon" :name="stepIcon(step)" /> {{ step.prayer.title }}</CCardHeader>
    <CRow>
      <CCardBody>
        <CCardText>
          <span class="prayer" :class="{ done: step.done }" :for="step.id">{{ step.prayer.text }}</span>
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
  font-size: small;
}
</style>
