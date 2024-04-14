<script setup lang="ts">

import {basket, getBasketPrice, getDeliveryPrice, getDiscount, getTax, getTotalPriceWithTax} from "~/store/basket";
</script>

<template>
  <div class="summary">
    <div class="sum-title">PODSUMOWANIE</div>
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
    <div class="has-text-weight-bold mb-3">PRODUKTY W KOSZYKU</div>
    <div class="products" v-for="(item, index) in basket" :key="index">
      <ProductDetails :src="`/img/${item.image}`" :name="item.name" :productId="item.productId"
                      :size="item.size"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.summary {
  width: 100%;
  padding: 5%;
  background-color: lightgray;

  .sum-title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .bold {
    font-weight: bold;
    text-align: end;
  }

  .sum {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .tax {
    display: flex;
    justify-content: space-between;
    border-top: solid gray 1px;
    margin-top: 30px;
  }

  .total {
    margin-top: 20px;
    margin-bottom: 20px;

    .total-price {
      font-size: x-large;
      text-align: end;
    }
  }

  @media only screen and (min-width: 768px) {
    .products {
      margin-bottom: 5%;
    }

    .products:last-child {
      margin-bottom: 0;
    }
  }
}
</style>