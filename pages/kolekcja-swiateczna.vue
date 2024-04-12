<template>
  <h3>Kolekcja świąteczna</h3>
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
          name: "Zimowy sweter - gdzie moje spodenki",
          price: "269.90",
          image: "/img/zima_0.jpg",
        },
        {
          id: 2,
          name: "Bluza rękawnik",
          price: "399.90",
          image: "/img/zima_1.jpg",
        },
        {
          id: 3,
          name: "Sweterek bruchomówcy",
          price: "350",
          image: "/img/zima_2.jpg",
        },
      ],
    };
  },
};
</script>