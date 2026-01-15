// Product Data - Add your Amazon affiliate products here
// Each product needs: id, title, image, link, category, badge (optional)

const products = [
    {
        id: 1,
        title: "Apple AirPods Pro (2nd Generation)",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95",
        link: "https://www.amazon.com/dp/B0D1XD1ZV3",
        category: "tech",
        badge: "deal"
    },
    {
        id: 2,
        title: "Govee LED Strip Lights 100ft RGB",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B09B7NQ5YM",
        category: "home",
        badge: "trending"
    },
    {
        id: 3,
        title: "Ninja Nutri-Blender Pro Personal Blender",
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B09QHXBCJQ",
        category: "kitchen",
        badge: "new"
    },
    {
        id: 4,
        title: "Apple Watch Series 9 GPS 41mm",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MR933ref_VW_34FR+watch-case-41-aluminum-midnight-nc-s9_VW_34FR+watch-face-41-aluminum-midnight-s9_VW_34FR?wid=752&hei=720&fmt=jpeg&qlt=95",
        link: "https://www.amazon.com/dp/B0CSTJ2Y5F",
        category: "tech",
        badge: "deal"
    },
    {
        id: 5,
        title: "Keurig K-Mini Coffee Maker",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B09WV7Q4KJ",
        category: "kitchen",
        badge: null
    },
    {
        id: 6,
        title: "Sunset Projection Lamp",
        image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B09KMYGVTN",
        category: "home",
        badge: "trending"
    },
    {
        id: 7,
        title: "Samsung Galaxy Buds2 Pro",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B0B9XXP5TL",
        category: "tech",
        badge: null
    },
    {
        id: 8,
        title: "Acupressure Mat Set",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B0BMT4Q2NL",
        category: "lifestyle",
        badge: "deal"
    },
    {
        id: 9,
        title: "Ice Roller for Face Puffiness",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B08RDMG7MY",
        category: "lifestyle",
        badge: "new"
    },
    {
        id: 10,
        title: "Dash Mini Waffle Maker",
        image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B00TGTPOVY",
        category: "kitchen",
        badge: "trending"
    },
    {
        id: 11,
        title: "Philips Hue Smart Bulbs",
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B09BBLWPQZ",
        category: "home",
        badge: null
    },
    {
        id: 12,
        title: "Scalp Massager Brush",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
        link: "https://www.amazon.com/dp/B076Q6442Z",
        category: "lifestyle",
        badge: "deal"
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
