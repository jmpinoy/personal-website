<template>
  <main style="margin-top: 100px; margin-bottom: 100px;">
    <div>
      <ProjectComponent :project="project1" />
      <ProjectComponent :project="project2" />
    </div>
  </main>
</template>

<script setup lang="ts">
import ProjectComponent from '@/components/ProjectComponent.vue';

// Will put in db for api
const project1 = {
  url: "byjoshmiranda.com",
  image: "byjoshmiranda",
  description: "A personal website to showcase my previous work experience, personal projects, and to introduce myself to visitors. Used Figma to do a loose design, and built with the following technologies.",
  technologies: [
    "Figma",
    "Vue3",
    "Vite",
    "Pinia",
    "Tailwind",
    "Firebase",
    "Firestore"
  ]
}

const project2 = {
  url: "ssandtech.com",
  image: "ssandtech",
  description: "The company website of Spiral Solutions and Technologies Inc. that my team and I built to showcase what services the company provides and what current contracts the company is working with their clients.",
  technologies: [
    "Vue3",
    "Vite",
    "Vuetify",
    "Nginx",
    "Docker",
    ".NET",
    "MongoDB"
  ]
}
</script>

<style>
@media (min-width: 1025px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
