<script setup lang="ts">

import {
  getTotalPrice,
  setOrderSummary,
  deliveryMethods,
} from "~/store/basket";
import {ref, onMounted} from "vue";

const method = ref('');
const applyDeliveryPrice = () => {
  const deliveryMethod = deliveryMethods.value.find(deliveryMethod => deliveryMethod.name === method.value);
  if (deliveryMethod) {
    setOrderSummary({deliveryPrice: deliveryMethod.price});
  }
};

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768;
  });
});

const showModal = ref(false);

const showHideModal = () => {
  showModal.value = !showModal.value;
};

</script>

<template>
  <CheckoutContainer content-right="content-none">
    <CheckoutNavigation delivery="active"/>
    <div class="menu">
      Łącznie: {{ getTotalPrice }}
      <Button @click="showHideModal">
      <span class="icon">
        <i class="fa-solid fa-bag-shopping"></i>
      </span>
      </Button>
    </div>
    <ShippingModal v-if="showModal" @closeModal="showHideModal"/>
    <template v-slot:title>INFORMACJE O KLIENCIE</template>
    <template v-slot:content-left>
      <div class="form-pair">
        <ProductInput>Imię*</ProductInput>
        <ProductInput>Nazwisko*</ProductInput>
      </div>
      <div class="form-pair">
        <ProductInput>Ulica*</ProductInput>
        <div class="form-pair" style="margin-bottom: 0">
          <ProductInput>Nr domu*</ProductInput>
          <ProductInput>Nr mieszkania</ProductInput>
        </div>
      </div>
      <div class="form-pair">
        <ProductInput>Dodatkowe informacje o adresie (opcjonalnie)</ProductInput>
        <ProductInput>Firma</ProductInput>
      </div>
      <div class="form-pair">
        <ProductInput>Kraj*</ProductInput>
        <ProductInput>Miasto*</ProductInput>
      </div>
      <div class="form-pair">
        <ProductInput>Kod pocztowy*</ProductInput>
        <ProductInput>Numer telefonu*
          <template v-slot:icon>
            <Button :class="{
                            'has-tooltip-right': !isMobile,
                            'has-tooltip-left': isMobile,
                            'button-icon has-tooltip-arrow': true,
                          }"
                    data-tooltip="W przypadku pytań o dostawę.">
                <span class="icon">
                  <i class="fa-regular fa-circle-question"></i>
                </span>
            </Button>
          </template>
        </ProductInput>
      </div>
      <div class="title-pair">
        <div class="title">METODY DOSTAWY</div>
        <Button :class="{
                            'has-tooltip-bottom': !isMobile,
                            'has-tooltip-left': isMobile,
                            'button-icon has-tooltip-arrow': true,
                          }"
                data-tooltip="W celu sfinalizowania zakupu i realizacji Zamówienia&#10; Klient zobowiązany jest do wyboru odpowiadającego&#10; mu sposobu i kosztu wysyłki towaru.">
          Zobacz nasze wysyłki
        </Button>
      </div>
      <div class="categories">
        <div style="width: 25%">Cena</div>
        <div style="width: 75%">Metoda</div>
      </div>
      <div v-for="(item) in deliveryMethods">
        <div class="checkbox-pair">
          <label class="checkbox">
            <input class="checkbox-input" type="radio" name="group" @change="applyDeliveryPrice"
                   v-model="method" :value="item.name">
            {{ item.price.toFixed(2) }} zł
          </label>
          <div>
            <img class="product-icon" src="/img/inpost-kurier-logo.png" alt="inpost-kurier-logo"/>
            <label class="label has-text-weight-normal">{{ item.name }}</label>
          </div>
        </div>
      </div>
      <ButtonPair :first-link="'/checkout/cart/'"
                  :second-link="'/checkout/payment/'">
        <template v-slot:first>
          Powrót
        </template>
        <template v-slot:second>PRZEJDŹ DALEJ</template>
      </ButtonPair>
    </template>
    <template v-slot:content-right>
      <ProductSummary/>
    </template>
  </CheckoutContainer>
</template>

<style scoped lang="scss">
@import "assets/styles/Shipping";
</style>