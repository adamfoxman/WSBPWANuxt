<template>
  <div class="product-card">
    <img class="product product-image" :src="product.image"/>
    <div>
      <h1>{{ product.name }}</h1>
      <p>{{ product.price }}</p>
      <div class="size-selection">
        <h2>Wybierz rozmiar</h2>
        <select name="size">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <button class ="button-card ">Dodaj do koszyka</button>
      <button class="button-qa">Zapytaj o produkt</button>
      <h2>Opis produktu: </h2>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {getProductsByType} from '../../composable/products.js';

const route = useRoute();
const products = getProductsByType(route.query.type);
console.log(route.query.type);
const productId = parseInt(route.params.id);
const product = products[productId- 1]
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  width: 90vw; /* Adjust width as needed */
  max-width: 800px; /* Reduced max-width for a sleeker appearance */
  margin: 0 auto; /* Center horizontally */
  background-color: #fff; /* White background for a clean look */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-radius: 8px; /* Slightly increased border radius */
  padding: 20px;
  padding-bottom: 80px; /* Reduced padding-bottom */
  box-sizing: border-box; /* Ensures padding respects width */
}

.button-card {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}

.button-qa {
  font-size: 1em;
  margin-bottom: 15px;
  color: #333;
}

h1 {
  font-size: 2em; /* Slightly increased font size for headings */
  margin-bottom: 15px; /* Increased spacing */
  color: #333; /* Darker heading color */
}

p {
  font-size: 1.1em; /* Increased font size for paragraphs */
  line-height: 1.6;
  margin-bottom: 15px;
  color: #666; /* Subdued text color */
}

.size-selection {
  display: flex; /* Align label and select */
  align-items: center;
  margin-bottom: 15px; /* Increased spacing */
}

.size-selection h2 {
  font-size: 1.1em; /* Slightly increased font size */
  margin-right: 15px; /* Increased spacing */
  color: #333;
  line-height: 1.6; /* Adjusted line-height */
}

select {
  padding: 8px 12px; /* Slightly reduced padding */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit; /* Consistent font */
}

button:hover {
  background-color: #0056b3; /* Darkened hover color */
}

@media (min-width: 768px) {
  .product-card {
    width: 600px; /* Adjust width as desired */
  }
}
</style>
