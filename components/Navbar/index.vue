<script setup lang="ts">

</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item link" to="/">
        <img class="logo" src="/img/clickfashion-logo.png" alt="logo-alt">
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  min-height: 150px;
  border-bottom: 2px solid lightgray;
  justify-content: center;

  .logo {
    max-height: none;
    
    @media only screen and (min-width: 768px) {
      margin-top: 40px;
    }
  }
}
</style>