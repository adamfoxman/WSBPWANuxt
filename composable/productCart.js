let cartProducts = [{
    product: {
        id: 1,
        name: "Bluzka",
        price: "469.99",
        image: "/img/jesienzima_0.jpg",
        description: "Fajen Bluzka",
    },
    size: "S",
}];

export function addCartProduct(product, size) {
    cartProducts.value.push([
        {
            product: product,
            size: size,
        }
    ]);
}

export function getCartProducts(){
    return cartProducts;
}