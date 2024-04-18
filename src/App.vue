<script setup lang="ts">
</script>

<template>
  <header>
    <div class="wrapper">
      <IntroComponent />
      <nav>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="Component"></component>
    </Transition>
  </RouterView>
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

/* route transitions */
.fade-enter-from {
  opacity: 0;
  transform: translateY(100px);
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

@media (min-width: 1025px) {
  header {
    display: flex;
    place-items: center;
    position: sticky;
    top: 0;
    /* padding-right: calc(var(--section-gap) / 2); */
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

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
