<script setup lang="ts">
const props = defineProps(['firstLink', 'secondLink']);
</script>

<template>
  <div class="button-pair">
    <NuxtLink :to="firstLink">
      <Button class="button-return"><i class="fa-solid fa-chevron-left"></i>
        <slot name="first"/>
      </Button>
    </NuxtLink>
    <NuxtLink :to="secondLink">
      <Button class="button-checkout">
        <slot name="second"/>
      </Button>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.button-pair {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;

  .button-return {
    justify-content: space-evenly;
    width: 125px;
    font-size: small;
    font-weight: bold;
    border: 1px black solid;
  }

  .button-return:hover {
    background-color: black;
    color: white;
  }

  .button-checkout {
    background-color: black;
    width: 300px;
    color: white;
    font-size: small;
    font-weight: bold;
  }

  .button-checkout:hover {
    background-color: white;
    color: black;
  }
}

@media only screen and (max-width: 767px) {
  .button-pair {
    flex-direction: column;
    gap: 30px;

    .button-return, .button-checkout {
      width: 100%;
      justify-content: center;
      gap: 20px;
    }
  }
}
</style>