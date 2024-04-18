<script setup lang="ts">
import AboutMe from '@/components/AboutMe.vue';
import CareerComponent from '@/components/CareerComponent.vue';
import ProjectComponent from '@/components/ProjectComponent.vue';
</script>

<template>
  <main>
    <div id="about">
      <AboutMe msg="About Me" />
    </div>
    <div id="experience">
      <CareerComponent msg="Career Expereinces" />
    </div>
    <div id="projects">
      <ProjectComponent msg="Projects" />
    </div>
  </main>
</template>
