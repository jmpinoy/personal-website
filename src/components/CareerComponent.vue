<template>
  <div class="wrap">
    <Card class="introcard" pt:title:style="font-size: 20px; font-weight: 200">
      <template #title>{{ job.jobTitle }}, {{ job.company }}</template>
      <template #subtitle>{{ job.date }}</template>
      <template #content>
        <ul>
          <li v-for="bullet in job.bullets" :key="bullet">
            {{ bullet }}
          </li>
        </ul>
        <div style="margin-top: 20px; margin-left: -8px;">
          <Chip v-for="tech in job.technologies" :key="tech">
            {{ tech }}
          </Chip>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
  // need to fix property does not exist typescript error
  defineProps<{
    job: Object
  }>()
</script>

<style scoped>
.introcard {
  background-color: var(--color-background);
  color: var(--vt-c-jcm-black);
  box-shadow: none;
}

li {
  list-style-type: circle;
  margin-left: 18px;
  list-style-position: inline;
}

@media (min-width: 1025px) {
}
</style>
