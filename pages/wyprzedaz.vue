<script setup>
import {getWyprzedazProducts} from "~/composable/products.js";
const products = getWyprzedazProducts();
</script>

<template>
  <h3>Wyprzedaż</h3>
  <div class="product">
    <section>
      <div class="products-container">
        <div v-for="product in products" :key="product.id" class="p-4">
          <img class="product product-image" :src="product.image" />
          <div class="mt-4">
            <h3 class="product-name">
              <NuxtLink class="navbar-item" :to="{ path: `/product/${product.id}`, query: {type: `WYPRZEDAZ`}}">
              {{ product.name }}
              </NuxtLink>
            </h3>
            <p class="mt-1">
              {{ product.price }} zł
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>