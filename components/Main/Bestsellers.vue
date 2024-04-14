<template>
    <div class="container">
        <span>
            <h1 class="title is-centered">Nasze bestsellery</h1>
        </span>
        <div class="columns is-multiline">
            <div v-for="product in products" :key="product.id" class="column is-half">
                <nuxt-link :to="product.link">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is-4by3">
                                <img :src="product.image" alt="Product Image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <p class="card-title is-4">{{ product.name }}</p>
                                <p class="card-subtitle is-6">{{ product.price }}</p>
                            </div>
                        </div>
                    </div>
                </nuxt-link>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Bluzka jedwabna",
                    price: "69.99 zł",
                    image: "img/codzienna_0.jpg",
                    link: "/product/3?type=STYLIZACJE_CODZIENNE"
                },
                {
                    id: 2,
                    name: "Sweterek świąteczny",
                    price: "$20",
                    image: "/img/zima_2.jpg",
                    link: "/product/1?type=KOLEKCJA_SWIATECZNA"
                },
                {
                    id: 3,
                    name: "Top wieczorowy",
                    price: "$30",
                    image: "/img/wieczor_1.jpg",
                    link: "/product/2?type=STYLIZACJE_WIECZOROWE"
                }
            ]
        };
    }
};
</script>

<style scoped>
.title {
    color: #000;
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
}

.card-title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
}

.card-subtitle {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
}
</style>