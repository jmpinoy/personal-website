<template>
  <div class="wrap">    
    <img :src="images[`${project.image}`]" width="175" />
    <Card class="introcard" pt:title:style="font-size: 20px; font-weight: 200">
      <template #title>
        <a :href="`https://${project.url}`" target="_blank">
          {{ project.url }}
          <i class="pi pi-arrow-up-right" />
        </a>
      </template>
      <template #content>
        <p>
          {{ project.description }}
        </p>
        <div style="margin-top: 20px; margin-left: -8px;">
          <Chip v-for="tech in project.technologies" :key="tech">
            {{ tech }}
          </Chip>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { filename } from 'pathe/utils'
  // need to fix property does not exist typescript error
  defineProps<{
    project: any
  }>()

  const glob = import.meta.glob('@/assets/images/*.png', { eager: true })
  const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
  )
</script>

<style scoped>
.introcard {
  background-color: var(--color-background);
  color: var(--vt-c-jcm-black);
  box-shadow: none;
}

@media (min-width: 1025px) {
  .wrap {
    display: flex;
    place-items: center;
  }
}
</style>
