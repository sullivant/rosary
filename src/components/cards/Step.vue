<script setup lang="ts">
// Cards
import { CCard, CCardBody } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'

const props = defineProps(['step'])
</script>

<template>
  <CCard style="width: 18rem">
    <CCardBody>
      <input type="checkbox" v-model="step.done" :id="step.id" />&nbsp;
      <label class="step" :class="{ done: step.done }" :for="step.id">{{ step.text }}</label>
    </CCardBody>
  </CCard>
</template>

<style>
.done {
  text-decoration: line-through;
}
.no-bullets {
  list-style-type: none;
}

/* This will eventually be a 'card' */
/* .step {
  margin: 50px 0;
  font-size: 15px;
} */
</style>
