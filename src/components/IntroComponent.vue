<template>
  <div class="wrap">
    <img class="logo" src="@/assets/logos/jcm_horizontal.gif" alt="jcm Logo" width="175" />

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
  box-shadow: none;
  width: 23rem;
}

.logo {
  width: 75px;
  margin-left: calc(50vw - 64px);
}

@media (min-width: 1025px) {
  .wrap {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .introcard {
    width: 26rem;
  }

  .logo {
    width: 175px;
    margin-left: 0;
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
