<script setup lang="ts">
import Step from '@/components/cards/Step.vue'

const props = defineProps(['steps'])
</script>

<template>

    <Step v-for="step in steps" :step="step" :key="step.id"></Step>

</template>
