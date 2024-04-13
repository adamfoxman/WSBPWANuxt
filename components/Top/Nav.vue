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
        <ul>
          <li>
            <NuxtLink class="navbar-item" to="/jesienzima">
              KOLEKCJA ZIMOWA
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="navbar-item" to="/stylizacje-wieczorowe">
              STYLIZACJE WIECZOROWE
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="navbar-item" to="/stylizacje-codzienne">
              STYLIZACJE CODZIENNE
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="navbar-item" to="/kolekcja-swiateczna">
              KOLEKCJA ŚWIĄTECZNA
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="navbar-item" to="/wyprzedaz">
              WYPRZEDAŻ
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="navbar-item" to="/koszyk">
              KOSZYK
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar-menu {
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left:40px;
  padding-right:40px;
  padding-bottom:40px;
  background:#fff;
}

.navbar-item {
  font-size: 1.6rem;
  line-height: 1.2;
  font-weight: 300;
  color: #000;
  padding: 12px 0 25px;
  font-family: 'Merriweather',serif;
  margin: 0 15px;
}

ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
}

</style>