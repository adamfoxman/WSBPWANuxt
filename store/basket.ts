import {computed, ref} from 'vue';

interface Product {
    name: string;
    price: number;
    image: string;
    quantity: number;
    size: string;
    productId: string;
}

interface Discount {
    code: string;
    amount: number;
}

interface DeliveryMethod {
    name: string;
    price: number;
}

interface OrderSummary {
    total: number;
    discount: number;
    deliveryPrice: number;
    tax: number;
}

export const basket = ref<Product[]>([
    {
        name: "Sukienka Kopertowa Zielona",
        price: 312.13,
        image: "Product.jpg",
        quantity: 2,
        size: "36",
        productId: "60-4980 36"
    },
    {
        name: "Spodnie Lniane Niebieskie",
        price: 219.44,
        image: "product2.jpg",
        quantity: 1,
        size: "40",
        productId: "60-5051 40"
    },
]);

export const discounts = ref<Discount[]>([
    {
        code: "PROMO20OFF",
        amount: 20
    }
]);

export const deliveryMethods = ref<DeliveryMethod[]>([
    {
        name: "Kurier",
        price: 20,
    },
    {
        name: "Kurier - płatność przy odbiorze",
        price: 25,
    },
    {
        name: "Kurier DPD - przedpłata",
        price: 20,
    },
    {
        name: "Kurier DPD - za pobraniem",
        price: 25,
    },
]);

export const orderSummary = ref<OrderSummary>({
    total: 0,
    discount: 0,
    deliveryPrice: 0,
    tax: 0.23,
});

export const setBasket = (newBasket: Product[]) => {
    basket.value = newBasket;
};

export const setOrderSummary = (newOrderSummary: Partial<OrderSummary>) => {
    orderSummary.value = {
        ...orderSummary.value,
        ...newOrderSummary,
    }
};

export const getTotalQuantity = computed(() => {
    return basket.value.reduce((total, item) => total + item.quantity, 0);
});

export const getBasketPrice = computed(() => {
    return (basket.value.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2);
});

export const getDiscount = computed(() => {
    return orderSummary.value.discount;
});

export const getDeliveryPrice = computed(() => {
    return orderSummary.value.deliveryPrice;
});

export const getTax = computed(() => {
    return (Number(getBasketPrice.value) * orderSummary.value.tax).toFixed(2);
});

export const getTotalPrice = computed(() => {
    return ((Number(getBasketPrice.value) - getDiscount.value + getDeliveryPrice.value).toFixed(2));
});
export const getTotalPriceWithTax = computed(() => {
    return (Number(getTotalPrice.value) + Number(getTax.value)).toFixed(2);
});

export const getItemTotalQuantity = (item: Product) => {
    return item.quantity;
};

export const getItemTotalValue = (item: Product) => {
    return (item.price * item.quantity).toFixed(2);
};

export const removeItemByIndex = (index: number) => {
    basket.value.splice(index, 1);
    setBasket([...basket.value]);
};

export const setQuantityForItem = (itemIndex: number, newQuantity: number) => {
    if (newQuantity >= 0) {
        if (itemIndex >= 0 && itemIndex < basket.value.length) {
            basket.value[itemIndex].quantity = newQuantity;
            setBasket([...basket.value]);
        }
    }
};

export const clearBasket = () => {
    setBasket([]);
    setOrderSummary({total: 0, discount: 0, deliveryPrice: 0, tax: 0});
};
