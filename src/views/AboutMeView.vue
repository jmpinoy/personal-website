<script setup lang="ts">
import AboutMe from '@/components/AboutMeComponent.vue';

const aboutme = "I’ve always been into technology ever since I was young. Tearing apart smartphones, loading custom kernels on Android phones, jailbreaking iPhones, dual booting Chromebooks, etc. I actually got into programming quite late in Junior year high school. Ever since then my thirst for knowledge in tech skyrocketed.\n\nI pursued a double major of Computer Engineering and Computer Science in College but ultimately focused on Computer Science since the part-time job I received Freshman year was programming focused. I was with Spiral Solutions all throughout college and 3+ years since I have graduated.  Throughout my years at Spiral I have gone through various tasks and technologies: from converting bash scripts to windows services, creating SQL/NoSQL Databases, developing API’s, designing and developing web applications, setting up project environments, participate in Agile Methodologies, and creating CI/CD pipelines just to name a few things I have learned. Currently I am geared more towards web app development based on the needs of the United States Air Force, but I am not afraid to learn different technologies or switch to different roles to whatever best assists the company.\n\nOutside of work, I’ve recently started pursuing side projects to increase my repertoire and experience. When I’m not developing anything I play video games with my friends or fiancé, watch K-dramas or Anime, play with my cats Coco and Matcha, or learn new recipes to cook. When I’m not feeling like a homebody I go lift and/or play basketball, go shopping, explore new restaurants, or travel to either snowboard or just explore the world!"
</script>

<template>
  <main style="margin-top: 100px; margin-bottom: 100px;">
    <div id="about">
      <AboutMe :msg="aboutme" />
    </div>
  </main>
</template>

<style scoped>
</style>
