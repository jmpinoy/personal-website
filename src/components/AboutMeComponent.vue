<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <Card class="verbiage" pt:body:class="" pt:content:style="white-space-collapse: preserve-breaks" pt:content:class="">
    <template #content>{{ msg }}</template>
  </Card>
</template>

<style scoped>
.verbiage {
  background-color: var(--color-background);
  color: var(--vt-c-jcm-black);
  box-shadow: none;
}

@media (min-width: 1025px) {
  /* .verbiage {
    text-align: left;
  } */
}
</style>
