<template>
  <h3>Stylizacje codzienne</h3>
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
          name: "Wzorek kwiatowy",
          price: "269.90",
          image: "/img/codzienna_2.jpg",
        },
        {
          id: 2,
          name: "Wzorek sportowy 2",
          price: "399.90",
          image: "/img/codzienna_1.jpg",
        },
        {
          id: 3,
          name: "Bluzka",
          price: "69.99",
          image: "/img/codzienna_0.jpg",
        },
      ],
    };
  },
};
</script>
