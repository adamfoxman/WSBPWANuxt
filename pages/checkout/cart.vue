<script setup lang="ts">
import {ref} from 'vue';

import {
  basket,
  getBasketPrice,
  removeItemByIndex,
  getItemTotalQuantity,
  getItemTotalValue,
  setQuantityForItem,
  clearBasket,
  discounts,
  setOrderSummary,
  getDiscount,
  getTotalPrice, getTotalQuantity,
} from '~/store/basket';

const discountCode = ref('');
const applyDiscount = () => {
  const appliedDiscount = discounts.value.find(discount => discount.code === discountCode.value);

  if (appliedDiscount) {
    setOrderSummary({discount: appliedDiscount.amount});
  }
};

const removeDiscount = () => {
  setOrderSummary({discount: 0});
};

</script>

<template>
  <CheckoutContainer content="content-column">
    <NuxtLink to="/">
      <Button class="button-return"><i class="fa-solid fa-chevron-left"></i>KONTYNUUJ ZAKUPY</Button>
    </NuxtLink>
    <template v-slot:title>KOSZYK</template>
    <template v-slot:content v-if="getTotalQuantity===0">
      <div>
        <div>Nie posiadasz produktów w koszyku.</div>
        <div>Kliknij
          <NuxtLink class="link" to="/"> tutaj,</NuxtLink>
          aby kontynuować zakupy.
        </div>
      </div>
    </template>
    <template v-slot:content-left v-if="getTotalQuantity!==0">
      <div class="categories">
        <div style="width: 40%">Produkt</div>
        <div style="width: 20%">Cena</div>
        <div style="width: 20%">Ilość</div>
        <div style="width: 20%">Razem</div>
      </div>
      <div class="products" v-for="(item, index) in basket" :key="index">
        <ProductDetails :src="`/img/${item.image}`" :name="item.name" :productId="item.productId" :size="item.size"/>
        <div class="values">
          <div class="value-content">
            <label class="label value-label">Cena:</label>
            <div class="price">{{ item.price }} zł</div>
          </div>
          <div class="value-content">
            <label class="label value-label">Ilość:</label>
            <div class="amount">
              <Button class="button-amount" @click="() => setQuantityForItem(Number(index), item.quantity-1)">
              <span class="icon">
                <i class="fa-regular fa-square-minus"></i>
              </span>
              </Button>
              <input class="input product-number" type="text" :value="getItemTotalQuantity(item)"
                     @keydown.enter="setQuantityForItem(Number(index), $event.target.value)">
              <Button class="button-amount" @click="() => setQuantityForItem(Number(index), item.quantity+1)">
              <span class="icon">
                <i class="fa-regular fa-square-plus"></i>
              </span>
              </Button>
            </div>
          </div>
          <div class="value-content">
            <label class="label value-label">Suma częściowa:</label>
            <div class="total-remove">{{ getItemTotalValue(item) }} zł
              <Button class="button-amount" @click="() => removeItemByIndex(Number(index))">
              <span class="icon">
                <i class="fa-solid fa-trash-can"></i>
              </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Button class="remove-all" @click="() => clearBasket()">
          <span class="icon">
            <i class="fa-regular fa-circle-xmark"></i>
          </span>
        Opróżnij koszyk
      </Button>
      <label class="label coupon-label">ZASTOSUJ KOD RABATOWY</label>
      <div class="coupon-content">
        <input class="input coupon-input" type="text" placeholder="WPROWADŹ KOD RABATOWY" v-model="discountCode">
        <Button class="button-coupon" @click="applyDiscount">
          ZATWIERDŹ KOD
        </Button>
        <Button class="button-coupon" @click="removeDiscount">
          ANULUJ KOD
        </Button>
      </div>
    </template>
    <template v-slot:content-right v-if="getTotalQuantity!==0">
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
        <div class="sum total">
          <div>Razem</div>
          <div class="total-price">{{ getTotalPrice }} zł</div>
        </div>
      </div>
      <NuxtLink to="/checkout/shipping">
        <Button class="button-checkout">PRZEJDŹ DO KASY</Button>
      </NuxtLink>
    </template>
  </CheckoutContainer>
</template>

<style scoped lang="scss">
@import "assets/styles/Cart";
</style>