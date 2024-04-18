<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

function scrollTo(section: string) {
  router.push(section);
}
</script>

<template>
  <header>
    <div class="wrapper">
      <IntroComponent />
      <nav>
        <a @click="scrollTo('#about')">About</a>
        <a @click="scrollTo('#experience')">Experience</a>
        <a @click="scrollTo('#projects')">Projects</a>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  transform: scale(1.5);
  margin: 0 auto 4rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--vt-c-jcm-white);
  background-color: var(--vt-c-jcm-black-soft);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    position: sticky;
    top: 0;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -7px;
    font-size: 1rem;
  }

  nav {
    cursor: pointer;
  }
}
</style>
