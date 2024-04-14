<script setup lang="ts">
const props = defineProps(['src', 'name', 'productId', 'size']);
</script>

<template>
  <div class="product-details">
    <img class="product-icon" :src="src" alt="product-alt"/>
    <div class="product-desc">
      <div class="has-text-weight-bold">{{ name }}</div>
      <div>{{ productId }}</div>
      <div class="has-text-weight-bold">Rozmiar: {{ size }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-details {
  align-items: center;
  display: flex;
  gap: 5%;
  flex: 1;
}

.product-icon {
  width: 64px;
  height: 96px;
}
</style>