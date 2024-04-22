<template>
  <main style="margin-top: 100px; margin-bottom: 100px;">
    <div v-for="project in projects" :key="project.image">
      <ProjectComponent :project="project" />
    </div>
  </main>
</template>

<script setup lang="ts">
import ProjectComponent from '@/components/ProjectComponent.vue';

const projects = [
  {
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
  },
  {
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
  },
  // {
  //   url: "mina-catalogue.firebaseapp.com",
  //   image: "mina-catalogue",
  //   description: "A portfolio and online shopping website for my sister's fashion design business that was in the process of development but ultimately dropped because of time constraint and other priorities.",
  //   technologies: [
  //     "Vue2",
  //     "Vue-CLI",
  //     "Vuetify",
  //     "Firebase Firestore",
  //     "Firebase Hosting"
  //   ]
  // },
  {
    url: "dev-moyers.firebaseapp.com",
    image: "dev-moyers",
    description: "My Capstone project that I built for my Bachelors degree in the Fall of 2020 semester. The goal was to develop a modernized website to help promote the business",
    technologies: [
      "Vue2",
      "Vue-CLI",
      "Vuetify",
      "Firebase Firestore",
      "Firebase Hosting",
      "Firebase Authentication"
    ]
  }
]
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
