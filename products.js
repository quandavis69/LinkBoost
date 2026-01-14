// Product Data - Add your Amazon affiliate products here
// Each product needs: id, title, image, link, category, badge (optional)

const products = [
    {
        id: 1,
        title: "Apple AirPods Pro (2nd Generation)",
        image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B0D1XD1ZV3",
        category: "tech",
        badge: "deal"
    },
    {
        id: 2,
        title: "Govee LED Strip Lights 100ft RGB",
        image: "https://m.media-amazon.com/images/I/71dYDtmGHqL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B09B7NQ5YM",
        category: "home",
        badge: "trending"
    },
    {
        id: 3,
        title: "Ninja Nutri-Blender Pro Personal Blender",
        image: "https://m.media-amazon.com/images/I/61ozMkNtU+L._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B09QHXBCJQ",
        category: "kitchen",
        badge: "new"
    },
    {
        id: 4,
        title: "Apple Watch Series 9 GPS 41mm",
        image: "https://m.media-amazon.com/images/I/71675CjxxzL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B0CSTJ2Y5F",
        category: "tech",
        badge: "deal"
    },
    {
        id: 5,
        title: "Keurig K-Mini Coffee Maker",
        image: "https://m.media-amazon.com/images/I/61-KUMrZURL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B09WV7Q4KJ",
        category: "kitchen",
        badge: null
    },
    {
        id: 6,
        title: "WANQLYN Sunset Projection Lamp",
        image: "https://m.media-amazon.com/images/I/61dM1EM0SQL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B09KMYGVTN",
        category: "home",
        badge: "trending"
    },
    {
        id: 7,
        title: "Samsung Galaxy Buds2 Pro",
        image: "https://m.media-amazon.com/images/I/51bRaLcKafL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B0B9XXP5TL",
        category: "tech",
        badge: null
    },
    {
        id: 8,
        title: "ProsourceFit Acupressure Mat Set",
        image: "https://m.media-amazon.com/images/I/81-5BJmmZQL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B0BMT4Q2NL",
        category: "lifestyle",
        badge: "deal"
    },
    {
        id: 9,
        title: "Ice Roller for Face Puffiness",
        image: "https://m.media-amazon.com/images/I/61b-A9BLNEL._SL1500_.jpg",
        link: "https://www.amazon.com/dp/B08RDMG7MY",
        category: "lifestyle",
        badge: "new"
    },
    {
        id: 10,
        title: "Dash Mini Waffle Maker",
        image: "https://m.media-amazon.com/images/I/71CfvpJVHXL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B00TGTPOVY",
        category: "kitchen",
        badge: "trending"
    },
    {
        id: 11,
        title: "Philips Hue White Ambiance Bulbs",
        image: "https://m.media-amazon.com/images/I/61yMx7HdYwL._AC_SL1500_.jpg",
        link: "https://www.amazon.com/dp/B09BBLWPQZ",
        category: "home",
        badge: null
    },
    {
        id: 12,
        title: "HEETA Scalp Massager Shampoo Brush",
        image: "https://m.media-amazon.com/images/I/71gRhDJBMpL._SL1500_.jpg",
        link: "https://www.amazon.com/dp/B076Q6442Z",
        category: "lifestyle",
        badge: "deal"
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
