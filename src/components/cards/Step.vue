<script setup lang="ts">
// Cards
import { CCard, CCardBody, CCardText, CCardImage, CCardHeader, CRow, CCol } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'

const props = defineProps(['step'])
</script>

<template>
  <CCard class="mb-3" style="width: 18rem" @click="step.done = !step.done">
    <CCardHeader> {{ step.title }}</CCardHeader>
    <CRow>
      <CCardImage class="rounded-0" src="https://coreui.io/vue/docs/images/vue.jpg" />
    </CRow>
    <CRow>
      <CCardBody>
        <CCardText>
          <input type="checkbox" v-model="step.done" :id="step.id" />&nbsp;
          <label class="step" :class="{ done: step.done }" :for="step.id">{{ step.text }}</label>
        </CCardText>
      </CCardBody>
    </CRow>
  </CCard>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
