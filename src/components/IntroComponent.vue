<template>
  <div class="wrap">
    <img src="@/assets/logos/jcm_horizontal.gif" alt="jcm Logo" width="175" />

    <Card class="introcard" pt:title:style="font-size: 40px;">
      <template #title>Joshua Miranda</template>
      <template #subtitle>Software Engineer</template>
      <template #content>
        <p>
          Hello, I’m Josh. I like to build responsive and engaging digital experiences throughout the entirety of the lifecycle. With a focus of growth and improvement with constant user feedback.
        </p>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.introcard {
  background-color: var(--color-background);
  color: var(--vt-c-jcm-black);
  width: 600px;
  box-shadow: none;
}

@media (min-width: 1024px) {
  .wrap {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
