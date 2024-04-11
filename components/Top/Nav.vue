<script setup>
const mobileMenu = ref(false)
const showMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value
}
</script>
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button"
         class="navbar-burger"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample"
         @click="showMobileMenu"
      >
      </a>
    </div>
    <div id="navbarBasicExample" :class="{'navbar-menu': !mobileMenu}">
    <div class="navbar-start">
        <NuxtLink class="navbar-item" to="/jesienzima">
          KOLEKCJA ZIMOWA
        </NuxtLink>
        <NuxtLink class="navbar-item" to="/stylizacje-wieczorowe">
          STYLIZACJE WIECZOROWE
        </NuxtLink>
        <NuxtLink class="navbar-item" to="/stylizacje-codzienne">
          STYLIZACJE CODZIENNE
        </NuxtLink>
        <NuxtLink class="navbar-item" to="/kolekcja-swiateczna">
          KOLEKCJA ŚWIĄTECZNA
        </NuxtLink>
        <NuxtLink class="navbar-item" to="/wyprzedaz">
          WYPRZEDAŻ
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>