<template>
  <div class="main-page">
    <TopInfo icon="info-circle"
      content="Dostawy mogą być obecnie opóźnione o 21 do 37 dni. Przepraszamy za utrudnienia." />
    <TopHeader>
    </TopHeader>
    <TopNav></TopNav>
    <slot />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.main-page {
  background-color: white;
}
</style>