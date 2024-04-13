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
                <NuxtLink class="navbar-item" to="/product">
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

<script>
export default {
  name: "App",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Bluzka",
          price: "469.99",
          image: "/img/jesienzima_0.jpg",
        },
        {
          id: 2,
          name: "Sweter",
          price: "399.99",
          image: "/img/jesienzima_1.jpg",
        },
        {
          id: 3,
          name: "Sweter",
          price: "359.99",
          image: "/img/jesienzima_2.jpg",
        },
      ],
    };
  },
};
</script>

