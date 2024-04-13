<script setup>
import { getJesienZimaProducts, ProductType } from '../../composable/products';
const products = getJesienZimaProducts();
</script>

<template>
  <h3>Jesień zima</h3>
  <div class="product">
    <section>
        <div class="products-container">
          <div v-for="product in products" :key="product.id" class="p-4">
            <img class="product product-image" :src="product.image" />
            <div class="mt-4">
              <h3 class="product-name">
                <li>
                <NuxtLink class="navbar-item" :to="{ path: `/product/${product.id}`, query: {type: `JESIEN_ZIMA`}}">
                {{ product.name }}
                </NuxtLink>
                </li>
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