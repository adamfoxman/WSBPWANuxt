<script setup lang="ts">
const props = defineProps(['delivery', 'payment']);
</script>

<template>
  <div class="navigation">
    <div class="delivery" :class="delivery">DOSTAWA</div>
    <div class="payment" :class="payment">PODSUMOWANIE I PŁATNOŚĆ</div>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: space-around;
  font-weight: bold;
  margin-top: 50px;

  .delivery, .payment {
    text-align: center;
    width: 45%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    border-top: solid 1px;
    color: lightgray;
  }

  .active {
    color: black;
  }
}
</style>