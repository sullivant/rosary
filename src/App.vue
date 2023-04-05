<script lang="ts">
import Step from './components/Step.vue'

let stepId = 0 // ID for each step in the rosary

export default {
  components: {
    Step
  },
  data() {
    return {
      message: 'Welcome!',
      titleClass: 'title',
      hideCompleted: false,
      steps: [
        { id: stepId++, text: 'OurFather', done: false },
        { id: stepId++, text: 'Hail Mary', done: false },
        { id: stepId++, text: 'Glory', done: false }
      ]
    }
  },
  computed: {
    filteredSteps() {
      // If we hide completed, filter the list away where not done
      return this.hideCompleted ? this.steps.filter((t) => !t.done) : this.steps
    }
  },
  methods: {
    resetSteps() {
      this.steps.forEach((e) => (e.done = false))
    }
  }
}
</script>

<template>
  <h1 :class="titleClass">{{ message }}</h1>
  <br />

  <ul>
    <Step v-for="step in filteredSteps" :step="step" :key="step.id"></Step>
  </ul>

  <br />
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
  <br />
  <button @click="resetSteps">Reset steps</button>
</template>

<style>
.title {
  color: cadetblue;
}
.done {
  text-decoration: line-through;
}
.no-bullets {
  list-style-type: none;
}
</style>
