// Product Data - Add your Amazon affiliate products here
// Each product needs: id, title, image, link, category, badge (optional)

const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Earbuds Pro",
        image: "https://m.media-amazon.com/images/I/61CVL27xTOL._AC_SL1500_.jpg",
        link: "https://amzn.to/example1",
        category: "tech",
        badge: "deal"
    },
    {
        id: 2,
        title: "LED Strip Lights 50ft RGB Color Changing",
        image: "https://m.media-amazon.com/images/I/81ItkRyOaaL._AC_SL1500_.jpg",
        link: "https://amzn.to/example2",
        category: "home",
        badge: "trending"
    },
    {
        id: 3,
        title: "Portable Blender USB Rechargeable",
        image: "https://m.media-amazon.com/images/I/71yKJrLqHhL._AC_SL1500_.jpg",
        link: "https://amzn.to/example3",
        category: "kitchen",
        badge: "new"
    },
    {
        id: 4,
        title: "Smart Watch Fitness Tracker",
        image: "https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_SL1500_.jpg",
        link: "https://amzn.to/example4",
        category: "tech",
        badge: "deal"
    },
    {
        id: 5,
        title: "Electric Milk Frother Handheld",
        image: "https://m.media-amazon.com/images/I/51E0VFINRRL._AC_SL1500_.jpg",
        link: "https://amzn.to/example5",
        category: "kitchen",
        badge: null
    },
    {
        id: 6,
        title: "Sunset Lamp Projector LED Light",
        image: "https://m.media-amazon.com/images/I/61dM1EM0SQL._AC_SL1500_.jpg",
        link: "https://amzn.to/example6",
        category: "home",
        badge: "trending"
    },
    {
        id: 7,
        title: "Mini Projector Portable 1080P",
        image: "https://m.media-amazon.com/images/I/61YS5XMWCBL._AC_SL1500_.jpg",
        link: "https://amzn.to/example7",
        category: "tech",
        badge: null
    },
    {
        id: 8,
        title: "Acupressure Mat and Pillow Set",
        image: "https://m.media-amazon.com/images/I/71y7CVITF6L._AC_SL1500_.jpg",
        link: "https://amzn.to/example8",
        category: "lifestyle",
        badge: "deal"
    },
    {
        id: 9,
        title: "Ice Roller for Face & Eye",
        image: "https://m.media-amazon.com/images/I/61b-A9BLNEL._SL1500_.jpg",
        link: "https://amzn.to/example9",
        category: "lifestyle",
        badge: "new"
    },
    {
        id: 10,
        title: "Mini Waffle Maker Machine",
        image: "https://m.media-amazon.com/images/I/71qMe7-YwkL._AC_SL1500_.jpg",
        link: "https://amzn.to/example10",
        category: "kitchen",
        badge: "trending"
    },
    {
        id: 11,
        title: "Cloud LED Neon Sign Light",
        image: "https://m.media-amazon.com/images/I/51W3Rw4hqBL._AC_SL1200_.jpg",
        link: "https://amzn.to/example11",
        category: "home",
        badge: null
    },
    {
        id: 12,
        title: "Scalp Massager Shampoo Brush",
        image: "https://m.media-amazon.com/images/I/71gRhDJBMpL._SL1500_.jpg",
        link: "https://amzn.to/example12",
        category: "lifestyle",
        badge: "deal"
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
