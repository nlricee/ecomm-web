const products = [
    {
        id: 1,
        name: "Cozy Chair",
        price: 126.99,
        image: "https://mobileimages.lowes.com/productimages/50ce7d80-99d1-4057-8caf-6272c855658a/86196905.jpeg",
        description: "White cozy polyester chair with a modern design."
    },
    {
        id: 2,
        name: "Mid-century Armchair",
        price: 1100.99,
        image: "https://i.etsystatic.com/15437068/r/il/cb8ccd/2083763787/il_fullxfull.2083763787_ct89.jpg",
        description: "Grey vintage mid-century armchair with wood frame."
    },
    {
        id: 3,
        name: "Accent Armchair",
        price: 209.99,
        image: "https://www.clevelandhomeoutlet.com/cdn/shop/files/Screenshot2024-09-06at4.58.24PM_706x700.png?v=1725656334",
        description: "Dark grey modern square back accent chair with a pillow."
    },
    {
        id: 4,
        name: "Scandinavian Armchair",
        price: 199.99,
        image: "https://cdn.sicaan.com/products/STW-000323/STW-000323-main_image_web-1d5ff144b1dc466699ebc48c8b2c72c0.xlarge.jpg",
        description: "Green vintage Scandinavian armchair in khaki corduroy and wood."
    },
    {
        id: 5,
        name: "Modern Lounge Chair",
        price: 320.00,
        image: "https://cane-line.com/cdn/shop/files/Serene_lounge_chair_3394.jpg?v=1749612197&width=1800",
        description: "Grey contemporary lounge chair, perfect for outdoor seating."
    },
    {
        id: 6,
        name: "Organic Lounge Chair",
        price: 3079.99,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4csGKlNvwSjOXJ6mmdsdT27T7Ysh0V14KXS5V7sMq4EYE1YS8FMfBRuu2_i7UM_Yo2X3tURRPlUVimk-QrIjeidDtHiajsvG6jwXwR2YJ",
        description: "Handcrafted solid wood lounge chair with an elegant design."
    },
    {
        id: 7,
        name: "Penny Lounge Chair",
        price: 1189.99,
        image: "https://midinmod.com/cdn/shop/files/midinmod-penny-tan-leather-lounge-chair-cross.jpg?v=1765793973&width=2048",
        description: "Penny tan leather lounge chair for a retro vibe."
    },
    {
        id: 8,
        name: "Mid Century Modern Upholstered Armchair",
        price: 109.99,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSW_azZA06LsNASdjSfEwQGpkJreAuvJmrBhwRqPcwhgjIDRl5T_88o5xz6LhFHWigyKGQFIh3_zPbyM-tn1EbLGON-ZsUe2pm3OvWUw6k",
        description: "Matladin Chenille Fabric Accent Chair with Scooped Arms."
    },
];

export function getProducts() {
    return products;
}

export function getProductById(id) {
    return products.find((product) => product.id === Number(id));
}