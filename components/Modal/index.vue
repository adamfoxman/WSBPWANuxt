<script setup lang="ts">
const emits = defineEmits(['closeModal'])

const closeModal = () => {
  emits('closeModal');
};

import {basket, getTotalQuantity, getBasketPrice, removeItemByIndex} from '~/store/basket';

</script>

<template>
  <div class="modal" v-if="getTotalQuantity===0">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head modal-card-empty">
        <Button class="button-close" @click="closeModal">
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </Button>
        <div class="info">
          Nie posiadasz produktów w koszyku.
        </div>
      </header>
    </div>
  </div>
  <div class="modal" v-else>
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">CART CONTENTS ({{ getTotalQuantity }})</p>
        <Button class="button-close" @click="closeModal">
          <span class="icon">
            <i class="fas fa-times"></i>
          </span>
        </Button>
      </header>
      <section class="modal-card-body">
        <div class="product" v-for="(item, index) in basket">
          <img class="product-icon" :src="`/img/${item.image}`" alt="product-alt"/>
          <div class="product-desc">
            {{ item.name }}
            <div class="contents">
              <p>{{ item.price }} zł</p>
              <Button class="button-close" @click="() => removeItemByIndex(Number(index))">
                <span class="icon">
                  <i class="fa-solid fa-trash-can"></i>
                </span>
              </Button>
            </div>
            <p class="product-number">{{ item.quantity }}</p>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <div class="summary">
          <p>Razem</p>
          <p class="price">{{ getBasketPrice }} zł</p>
        </div>
        <NuxtLink class="link" to="/checkout/cart/">
          <Button class="button-cart">PRZEJDŹ DO KOSZYKA<i class="fa-solid fa-cart-shopping"></i></Button>
        </NuxtLink>
        <Button class="button-close" @click="closeModal">POWRÓT</Button>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/Modal";
</style>