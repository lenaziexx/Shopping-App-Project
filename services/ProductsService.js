const PRODUCTS = [
    {
        id: 100,
        name: 'Baggy Jeans',
        price: 50,
        image: require('../assets/products/BaggyJeans.jpg'),
        description: 'A blue baggy jean .'
    },
    {
        id: 101,
        name: 'Cute Tank Top',
        price: 20,
        image: require('../assets/products/CuteTankTop.jpg'),
        description: 'A pink trendy tank top.'
    },
    {
        id: 102,
        name: 'E-girl Combo',
        price: 65,
        image: require('../assets/products/E-girlCombo.jpg'),
        description: 'A special two piece e-girl outfit.'
    },
    {
        id: 103,
        name: 'Jacket',
        price: 40,
        image: require('../assets/products/Jacket.jpg'),
        description: 'A stylish two colored jacket .'
    },
    {
        id: 104,
        name: 'Pink Outfit',
        price: 120,
        image: require('../assets/products/PinkOutfit.png'),
        description: 'A cute pink outfit with jacket.'
    },
    {
        id: 105,
        name: 'Pink Tank',
        price: 30,
        image: require('../assets/products/PinkTank.jpg'),
        description: 'A small pink tank top.'
    },
    {
        id: 106,
        name: 'Summer Anime White Tank',
        price: 60,
        image: require('../assets/products/SummerAnimeWhiteTank.jpg'),
        description: 'A white summer tank top.'
    },
    {
        id: 107,
        name: 'Two Piece Outfit',
        price: 75,
        image: require('../assets/products/TwoPieceOutfit.jpg'),
        description: 'A purple tennis skirt with sweater.'
    },
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}