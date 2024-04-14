export function getProductsByType(type){
    switch(type){
        case "JESIEN_ZIMA":
            return getJesienZimaProducts();
        case "KOLEKCJA_SWIATECZNA":
            return getKolekcjaSwiatecznaProducts();
        case "STYLIZACJE_CODZIENNE":
            return getStylizacjeCodzienneProducts();
        case "STYLIZACJE_WIECZOROWE":
            return getStylizacjeWieczoroweProducts();
        case "WYPRZEDAZ":
            return getWyprzedazProducts();
        default:
            break;
    }
}

export function getJesienZimaProducts() {
    return [
        {
            id: 1,
            name: "Bluzka",
            price: "469.99",
            image: "/img/jesienzima_0.jpg",
            description: "Fajen Bluzka",
        },
        {
            id: 2,
            name: "Sweter",
            price: "399.99",
            image: "/img/jesienzima_1.jpg",
            description: "Fajen Sweter",
        },
        {
            id: 3,
            name: "Sweter",
            price: "359.99",
            image: "/img/jesienzima_2.jpg",
            description: "Fajen Sweter",
        },
    ];
}

export function getKolekcjaSwiatecznaProducts() {
    return [
        {
            id: 1,
            name: "Zimowy sweter - gdzie moje spodenki",
            price: "269.90",
            image: "/img/zima_0.jpg",
            description: "Fajen Zimowy sweter - gdzie moje spodenki",
        },
        {
            id: 2,
            name: "Bluza rękawnik",
            price: "399.90",
            image: "/img/zima_1.jpg",
            description: "Fajen Bluza rękawnik",
        },
        {
            id: 3,
            name: "Sweterek bruchomówcy",
            price: "350",
            image: "/img/zima_2.jpg",
            description: "Fajen Sweterek bruchomówcy",
        },
    ];
}


export function getStylizacjeCodzienneProducts() {
    return [
        {
            id: 1,
            name: "Wzorek kwiatowy",
            price: "269.90",
            image: "/img/codzienna_2.jpg",
            description: "Fajen Wzorek kwiatowy",
        },
        {
            id: 2,
            name: "Wzorek sportowy 2",
            price: "399.90",
            image: "/img/codzienna_1.jpg",
            description: "Fajen Wzorek sportowy 2",
        },
        {
            id: 3,
            name: "Bluzka",
            price: "69.99",
            image: "/img/codzienna_0.jpg",
            description: "Fajen Bluzka",
        },
    ];
}

export function getStylizacjeWieczoroweProducts() {
    return [
        {
            id: 1,
            name: "Deborash 24",
            price: "1469.90",
            image: "/img/wieczor_0.jpg",
            description: "Fajen Deborash 24",
        },
        {
            id: 2,
            name: "Ciuszek 14",
            price: "399.90",
            image: "/img/wieczor_1.jpg",
            description: "Fajen Ciuszek 14",
        },
        {
            id: 3,
            name: "Strój wieczorowy",
            price: "759.90",
            image: "/img/wieczor_2.jpg",
            description: "Fajen Strój wieczorowy",
        },
    ];
}

export function getWyprzedazProducts() {
    return [
        {
            id: 1,
            name: "Zestaw",
            price: "134.90",
            image: "/img/wyprzedaz_0.jpg",
            description: "Fajen Zestaw",
        },
        {
            id: 2,
            name: "Kurtka",
            price: "129.90",
            image: "/img/wyprzedaz_1.jpg",
            description: "Fajen Kurtka",
        },
        {
            id: 3,
            name: "Żółta bluzka",
            price: "49.99",
            image: "/img/wyprzedaz_2.jpg",
            description: "Fajen Żółta bluzka",
        },
    ];
}