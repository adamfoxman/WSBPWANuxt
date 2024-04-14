<script setup lang="ts">

const props = defineProps(['basket']);
const emits = defineEmits(['closeModal'])

const closeModal = () => {
  emits('closeModal');
};

import {
  basket,
  getBasketPrice,
  getDeliveryPrice,
  getDiscount, getTax, getTotalPriceWithTax
} from '~/store/basket';

</script>

<template>
  <body class="is-clipped">
  <div class="modal">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <div class="summary">
          <div class="sum-title">
            <div>PODSUMOWANIE</div>
            <Button class="button-close" @click="closeModal">
              <span class="icon">
                <i class="fas fa-times"></i>
              </span>
            </Button>
          </div>
          <div class="sum">
            <div>Suma częściowa</div>
            <div class="bold">{{ getBasketPrice }} zł</div>
          </div>
          <div class="sum">
            <div>Rabat</div>
            <div class="bold">{{ getDiscount }} zł</div>
          </div>
          <div class="sum">
            <div>Dostawa</div>
            <div class="bold" v-if="getDeliveryPrice===0">Jeszcze nie obliczone</div>
            <div class="bold" v-else>{{ getDeliveryPrice }} zł</div>
          </div>
          <div class="tax">
            <div>Podatek</div>
            <div class="bold">{{ getTax }} zł</div>
          </div>
          <div class="sum total">
            <div>Podsumowanie</div>
            <div class="total-price">{{ getTotalPriceWithTax }} zł</div>
          </div>
        </div>
      </header>
      <section class="modal-card-body">
        <div class="has-text-weight-bold">PRODUKTY W KOSZYKU</div>
        <div class="products" v-for="(item, index) in basket" :key="index">
          <ProductDetails :src="`/img/${item.image}`" :name="item.name" :productId="item.productId" :size="item.size"/>
        </div>
      </section>
    </div>
  </div>
  </body>
</template>

<style scoped lang="scss">
@import "assets/styles/ShippingModal";
</style>