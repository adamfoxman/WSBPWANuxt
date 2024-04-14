<script setup lang="ts">

import {getTotalPrice} from "~/store/basket";
import {ref} from "vue";

const showModal = ref(false);

const showHideModal = () => {
  showModal.value = !showModal.value;
};

</script>

<template>
  <CheckoutContainer content-right="content-none">
    <CheckoutNavigation payment="active"/>
    <div class="menu">
      Łącznie: {{ getTotalPrice }}
      <Button @click="showHideModal">
        <span class="icon">
          <i class="fa-solid fa-bag-shopping"></i>
        </span>
      </Button>
    </div>
    <ShippingModal v-if="showModal" @closeModal="showHideModal"/>
    <template v-slot:title>METODA PŁATNOŚCI</template>
    <template v-slot:content-left>
      <div class="checkbox-pair">
        <label class="checkbox">
          <input class="checkbox-input" type="radio" name="group" checked>
          <img class="payment-icon" src="/img/payu-logo.png" alt="payu-logo"/>
        </label>
        <label class="label has-text-weight-normal">Płatność PayU</label>
      </div>
      <ButtonPair :first-link="'/checkout/shipping/'"
                  :second-link="'/'">
        <template v-slot:first>Powrót</template>
        <template v-slot:second>REALIZUJ ZAMÓWIENIE</template>
      </ButtonPair>
    </template>
    <template v-slot:content-right>
      <ProductSummary/>
    </template>
  </CheckoutContainer>
</template>

<style scoped lang="scss">
@import "assets/styles/Payment";
</style>