<template>
  <main style="margin-top: 100px; margin-bottom: 100px;">
    <div>
      <CareerComponent :job="job1" />
      <CareerComponent :job="job2" />
    </div>
    <Button link @click="downloadResume">
      View Full Résumé
    </Button>
  </main>
</template>

<script setup lang="ts">
import CareerComponent from '@/components/CareerComponent.vue';

function downloadResume() {
  window.open('/Resume_Joshua_Miranda.pdf', '_blank');
}

// Will put in db for api
const job1 = {
  jobTitle: "DevSecOps Software Engineer",
  company: "Spiral Solutions and Technologies Inc.",
  date: "2020-Present",
  bullets: [
    "Lead the R&D efforts of Vue3 and Vite",
    "Developed the current company website with new technologies Vite and Vue3",
    "Migrated previous vue2 and Vue CLI projects to Vue3 and Vite",
    "Assist in creating new web application projects with Azure DevOps repositories, CI/CD pipelines, and Agile methodoligies",
    "Leading the R&D efforts of Azure's OpenAI services for an application for the Business Development team",
    "Continuously learning and keeping up to date with new technologies that can improve our applications and development process"
  ],
  technologies: [
    "Vue.js",
    "Vite",
    "Vuetify",
    "Pinia",
    "Nginx",
    "Docker"
  ]
}

const job2 = {
  jobTitle: "Part-time DevSecOps Software Engineer",
  company: "Spiral Solutions and Technologies Inc.",
  date: "2018-2020",
  bullets: [
    "Studied the workplace process of developing different types of software in a secured location and a non-secured location",
    "Converted outdated bash scripts to Windows services",
    "Developed .NET MVC applications for the USAF",
    "Assisted in migrating technologies over to Vue.js and began containerizing projects",
    "Developed webapplications in Vue.js and Microsoft Blazor",
    "Developed Internal REST APIs in .NET for the MVC applications",
    "Developed Internal REST APIs in .NET for both Vue.js and Microsoft Blazor webapplications",
    "Created data bases in MSSQL for APIs developed"
  ],
  technologies: [
    "Vue.js",
    "Blazor",
    ".NET",
    "Docker",
    "Kubernetes",
    "MSSQL",
    "MongoDB",
    "Azure Devops"
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
