<template>
  <h3>Stylizacje wieczorowe</h3>
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
</template>>

<script>
export default {
  name: "App",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Deborash 24",
          price: "1469.90",
          image: "/img/wieczor_0.jpg",
        },
        {
          id: 2,
          name: "Ciuszek 14",
          price: "399.90",
          image: "/img/wieczor_1.jpg",
        },
        {
          id: 3,
          name: "Strój wieczorowy",
          price: "759.90",
          image: "/img/wieczor_2.jpg",
        },
      ],
    };
  },
};
</script>