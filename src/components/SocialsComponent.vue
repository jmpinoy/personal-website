<template>
  <div class="social" style="font-size: x-large;">
    <a class="socialIcon" href="https://www.linkedin.com/in/joshua-c-miranda/" target="_blank">
      <Chip icon="pi pi-linkedin" />
    </a>
    <a class="socialIcon" href="https://github.com/jmpinoy" target="_blank">
    <Chip icon="pi pi-github" />
    </a>
    <a class="socialIcon" href="https://www.instagram.com/jm_pinoy/" target="_blank">
    <Chip icon="pi pi-instagram" />
    </a>
    <a class="socialIcon" href="mailto:josh.miranda010@gmail.com">
    <Chip icon="pi pi-at" />
    </a>
  </div>
</template>
  
<script setup lang="ts">
</script>

<style scoped>
.social {
  max-width: fit-content;
  padding-top: 10px;
  margin: auto;
}

.socialIcon {
  text-decoration: none;
  transition: 0;
  padding: 0;
  border-radius: 0;
  cursor: pointer;
}

.socialIcon:hover {
  color: var(--color-text);
  background-color: transparent;
}

@media (min-width: 1025px) {
  .social {
    position: fixed;
    left: 10vw;
    bottom: 10vh;
  }
}
</style>
  