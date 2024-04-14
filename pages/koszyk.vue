<script setup>
import { getCartProducts } from '../../composable/productCart';
const products = getCartProducts();
console.log(products[0]);
</script>

<template>
  <h3>koszyk</h3>
  <div class="product">
    <section>
      <div class="products-container">
        <div v-for="product in products" :key="product.id" class="p-4">
          <img class="product product-image" :src="product.image" />
          <div class="mt-4">
            <h3 class="product-name">
              <li>
                  {{ product.product.name }}
              </li>
            </h3>
            <p class="mt-1">
              {{ product.product.price }} zł
            </p>
            <p class="mt-1">
              {{ product.size }} zł
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>