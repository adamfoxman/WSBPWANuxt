<template>
  <h3>Wyprzedaż</h3>
  <div class="product">
    <section>
      <div class="products-container">
        <div v-for="product in products" :key="product.id" class="p-4">
          <img class="product product-image" :src="product.image" />
          <div class="mt-4">
            <h3 class="product-name">
              {{ product.name }}
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

<script>
export default {
  name: "App",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Zestaw",
          price: "134.90",
          image: "/img/wyprzedaz_0.jpg",
        },
        {
          id: 2,
          name: "Kurtka",
          price: "129.90",
          image: "/img/wyprzedaz_1.jpg",
        },
        {
          id: 3,
          name: "Żółta bluzka",
          price: "49.99",
          image: "/img/wyprzedaz_2.jpg",
        },
      ],
    };
  },
};
</script>