const models = [
  {
    payload: [
      {
        title: "MacBook Air M1 Chip",
        description:
          "8-Core CPU, 7-Core GPU, 8GB Unified Memory, 256GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 999,
        stock: 10,
      },
      {
        title: "MacBook Air M2 Chip",
        description:
          "8-Core CPU, 8-Core GPU, 8GB Unified Memory, 256GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1199,
        stock: 10,
      },
      {
        title: "MacBook Air M2 Chip 10-Core GPU",
        description:
          "8-Core CPU, 10-Core GPU, 8GB Unified Memory, 512GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1499,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "MacBook Pro 13” M2 - 256GB SSD",
        description:
          "8-Core CPU, 10-Core GPU, 8GB Unified Memory, 256GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1299,
        stock: 10,
      },
      {
        title: "MacBook Pro 13” M2 - 512GB SSD",
        description:
          "8-Core CPU, 10-Core GPU, 8GB Unified Memory, 512GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1499,
        stock: 10,
      },
      {
        title: "MacBook Pro 14” M2 Pro - 512GB SSD",
        description:
          "10-Core CPU, 16-Core GPU, 16GB Unified Memory, 512GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1999,
        stock: 10,
      },
      {
        title: "MacBook Pro 14” M2 Pro - 1TB SSD",
        description:
          "12-Core CPU, 19-Core GPU, 16GB Unified Memory, 1TB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 2499,
        stock: 10,
      },
      {
        title: "MacBook Pro 14” M2 Max - 1TB SSD",
        description:
          "12-Core CPU, 30-Core GPU, 32GB Unified Memory, 1TB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 3099,
        stock: 10,
      },
      {
        title: "MacBook Pro 16” M2 Pro - 512GB SSD",
        description:
          "12-Core CPU, 19-Core GPU, 16GB Unified Memory, 512GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 2499,
        stock: 10,
      },
      {
        title: "MacBook Pro 16” M2 Pro - 1TB SSD",
        description:
          "12-Core CPU, 19-Core GPU, 16GB Unified Memory, 1TB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 2699,
        stock: 10,
      },
      {
        title: "MacBook Pro 16” M2 Max - 1TB SSD",
        description:
          "12-Core CPU, 38-Core GPU, 32GB Unified Memory, 1TB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 3499,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iMac 24” Apple M1 - 256 GB SSD",
        description:
          "8-Core CPU, 7-Core GPU, 8GB Unified Memory, 256GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1299,
        stock: 10,
      },
      {
        title: "iMac 24” Apple M1 - 256 GB SSD",
        description:
          "8-Core CPU, 8-Core GPU, 8GB Unified Memory, 256GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1499,
        stock: 10,
      },
      {
        title: "iMac 24” Apple M1 - 512 GB SSD",
        description:
          "8-Core CPU, 8-Core GPU, 8GB Unified Memory, 512GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1699,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "Mac mini M2 - 256GB SSD",
        description:
          "8-Core CPU, 10-Core GPU, 8GB Unified Memory, 256GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 599,
        stock: 10,
      },
      {
        title: "Mac mini M2 - 512GB SSD",
        description:
          "8-Core CPU, 10-Core GPU, 8GB Unified Memory, 512GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 799,
        stock: 10,
      },
      {
        title: "Mac mini M2 Pro - 512GB SSD",
        description:
          "10-Core CPU, 16-Core GPU, 16GB Unified Memory, 512GB SSD Storage",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1299,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "Mac Studio M1 Max - 512GB SSD",
        description: "10-Core CPU, 24-Core GPU, 16-Core Neural Engine",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1999,
        stock: 10,
      },
      {
        title: "Mac Studio M1 Ultra - 512GB SSD",
        description: "20-Core CPU, 48-Core GPU, 32-Core Neural Engine",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 3999,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "Mac Pro Tower 8-Core - 32GB Memory",
        description: "Intel Xeon W 3.5GHz, Turbo Boost up to 4GHz",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 5999,
        stock: 10,
      },
      {
        title: "Mac Pro Tower 12-Core - 32GB Memory",
        description: "Intel Xeon W 3.3GHz, Turbo Boost up to 4.4GHz",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 6999,
        stock: 10,
      },
      {
        title: "Mac Pro Tower 8-Core - 192GB Memory",
        description: "Intel Xeon W 3.5GHz, Turbo Boost up to 4GHz",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 8999,
        stock: 10,
      },
      {
        title: "Mac Pro Tower 12-Core - 32GB Memory",
        description: "Intel Xeon W 3.3GHz, Turbo Boost up to 4.4GHz",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 9999,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iPad Pro 11” - 128GB Storage",
        description: "Liquid Retina display, Wi-Fi connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 799,
        stock: 10,
      },
      {
        title: "iPad Pro 11” - 512GB Storage",
        description: "Liquid Retina display, Wi-Fi connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1099,
        stock: 10,
      },
      {
        title: "iPad Pro 11” - 1TB Storage",
        description: "Liquid Retina display, Wi-Fi connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1499,
        stock: 10,
      },
      {
        title: "iPad Pro 11” - 2TB Storage",
        description: "Liquid Retina display, Wi-Fi connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1899,
        stock: 10,
      },
      {
        title: "iPad Pro 12.9” - 128GB Storage",
        description: "Liquid Retina XDR display, Wi-Fi connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1099,
        stock: 10,
      },
      {
        title: "iPad Pro 12.9” - 512GB Storage",
        description: "Liquid Retina XDR display, Wi-Fi connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1399,
        stock: 10,
      },
      {
        title: "iPad Pro 12.9” - 1TB Storage",
        description: "Liquid Retina XDR display, Wi-Fi connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1799,
        stock: 10,
      },
      {
        title: "iPad Pro 12.9” - 2TB Storage",
        description: "Liquid Retina XDR display, Wi-Fi connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 2199,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iPad Air 64GB Storage - Wi-Fi",
        description: "Wi-Fi connectivity, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 599,
        stock: 10,
      },
      {
        title: "iPad Air 256GB Storage - Wi-Fi",
        description: "Wi-Fi connectivity, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 749,
        stock: 10,
      },
      {
        title: "iPad Air 64GB Storage - Wi-Fi + Celullar",
        description: "Wi-Fi + Cellular connectivity, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 749,
        stock: 10,
      },
      {
        title: "iPad Air 256GB Storage - Wi-Fi + Celullar",
        description: "Wi-Fi + Cellular connectivity, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 899,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iPad 10.9” 64GB Storage - Wi-Fi",
        description: "A14 Bionic chip, Wi-Fi connectivity, Silver color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 449,
        stock: 10,
      },
      {
        title: "iPad 10.9” 256GB Storage - Wi-Fi",
        description: "A14 Bionic chip, Wi-Fi connectivity, Silver color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 599,
        stock: 10,
      },
      {
        title: "iPad 10.9” 64GB Storage - Wi-Fi + Celullar",
        description:
          "A14 Bionic chip, Wi-Fi + Cellular, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 599,
        stock: 10,
      },
      {
        title: "iPad 10.9” 256GB Storage - Wi-Fi + Celullar",
        description:
          "A14 Bionic chip, Wi-Fi + Cellular, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 749,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iPad 10.2” 64GB Storage - Wi-Fi",
        description: "A13 Bionic chip, Wi-Fi connectivity, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 329,
        stock: 10,
      },
      {
        title: "iPad 10.2” 64GB Storage - Wi-Fi + Celullar",
        description: "A13 Bionic chip, Wi-Fi + Cellular, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 459,
        stock: 10,
      },
      {
        title: "iPad 10.2” 256GB Storage - Wi-Fi",
        description: "A13 Bionic chip, Wi-Fi connectivity, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 479,
        stock: 10,
      },
      {
        title: "iPad 10.2” 256GB Storage - Wi-Fi + Celullar",
        description: "A13 Bionic chip, Wi-Fi + Cellular, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 609,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iPad 8.3” 64GB Storage - Wi-Fi",
        description: "A15 Bionic chip, Wi-Fi connectivity, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 499,
        stock: 10,
      },
      {
        title: "iPad 8.3” 64GB Storage - Wi-Fi + Celullar",
        description: "A15 Bionic chip, Wi-Fi + Cellular, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 649,
        stock: 10,
      },
      {
        title: "iPad 8.3” 256GB Storage - Wi-Fi",
        description: "A15 Bionic chip, Wi-Fi connectivity, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 649,
        stock: 10,
      },
      {
        title: "iPad 8.3” 256GB Storage - Wi-Fi + Celullar",
        description: "A15 Bionic chip, Wi-Fi + Cellular, Space gray color",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 799,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iPhone 14 Pro - 128GB Storage",
        description: "6.7-inch Super Retina XDR display, A16 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 999,
        stock: 10,
      },
      {
        title: "iPhone 14 Pro - 256GB Storage",
        description: "6.7-inch Super Retina XDR display, A16 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1099,
        stock: 10,
      },
      {
        title: "iPhone 14 Pro - 512GB Storage",
        description: "6.7-inch Super Retina XDR display, A16 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1299,
        stock: 10,
      },
      {
        title: "iPhone 14 Pro - 1TB Storage",
        description: "6.7-inch Super Retina XDR display, A16 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1499,
        stock: 10,
      },
      {
        title: "iPhone 14 Pro Max - 128GB Storage",
        description: "6.7-inch Super Retina XDR display, A16 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1099,
        stock: 10,
      },
      {
        title: "iPhone 14 Pro Max - 256GB Storage",
        description: "6.7-inch Super Retina XDR display, A16 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1199,
        stock: 10,
      },
      {
        title: "iPhone 14 Pro Max - 512GB Storage",
        description: "6.7-inch Super Retina XDR display, A16 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1399,
        stock: 10,
      },
      {
        title: "iPhone 14 Pro Max - 1TB Storage",
        description: "6.7-inch Super Retina XDR display, A16 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1599,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iPhone 14 - 128GB Storage",
        description: "6.1-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 799,
        stock: 10,
      },
      {
        title: "iPhone 14 - 256GB Storage",
        description: "6.1-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 899,
        stock: 10,
      },
      {
        title: "iPhone 14 - 512GB Storage",
        description: "6.1-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1099,
        stock: 10,
      },
      {
        title: "iPhone 14 Plus - 128GB Storage",
        description: "6.7-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 899,
        stock: 10,
      },
      {
        title: "iPhone 14 Plus - 256GB Storage",
        description: "6.7-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 999,
        stock: 10,
      },
      {
        title: "iPhone 14 Plus - 512GB Storage",
        description: "6.7-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1199,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iPhone 13 mini - 128GB Storage",
        description: "5.4-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 599,
        stock: 10,
      },
      {
        title: "iPhone 13 mini - 256GB Storage",
        description: "5.4-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 699,
        stock: 10,
      },
      {
        title: "iPhone 13 mini - 512GB Storage",
        description: "5.4-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 899,
        stock: 10,
      },
      {
        title: "iPhone 13 - 128GB Storage",
        description: "6.1-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 699,
        stock: 10,
      },
      {
        title: "iPhone 13 - 256GB Storage",
        description: "6.1-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 799,
        stock: 10,
      },
      {
        title: "iPhone 13 - 512GB Storage",
        description: "6.1-inch Super Retina XDR display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 999,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "iPhone SE - 64GB Storage",
        description: "4.7-inch Retina HD display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 429,
        stock: 10,
      },
      {
        title: "iPhone SE - 128GB Storage",
        description: "4.7-inch Retina HD display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 479,
        stock: 10,
      },
      {
        title: "iPhone SE - 256GB Storage",
        description: "4.7-inch Retina HD display, A15 Bionic chip",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 579,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "Apple Watch Ultra - Titanium Case Alpine Loop",
        description: "49mm case size, GPS + Cellular connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 799,
        stock: 10,
      },
      {
        title: "Apple Watch Ultra - Titanium Case Trail Loop",
        description: "49mm case size, GPS + Cellular connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 799,
        stock: 10,
      },
      {
        title: "Apple Watch Ultra - Titanium Case Ocean Band",
        description: "49mm case size, GPS + Cellular connectivity",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 799,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "Apple Watch Series 8 - Aluminium Case 41mm",
        description: "Starlight Aluminum Case with Braided Solo Loop",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 449,
        stock: 10,
      },
      {
        title: "Apple Watch Series 8 - Aluminium Case 45mm",
        description: "Starlight Aluminum Case with Braided Solo Loop",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 479,
        stock: 10,
      },
      {
        title: "Apple Watch Series 8 - Midnight Aluminium Case 41mm",
        description: "Midnight Aluminum Case with Sport Band",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 399,
        stock: 10,
      },
      {
        title: "Apple Watch Series 8 - Midnight Aluminium Case 45mm",
        description: "Midnight Aluminum Case with Sport Band",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 429,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "Apple Watch SE Silver Aluminum 40mm Case",
        description: "Silver Aluminum Case with Solo Loop",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 249,
        stock: 10,
      },
      {
        title: "Apple Watch SE Starlight Aluminum 40mm Case",
        description: "Starlight Aluminum Case with Sport Loop",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 249,
        stock: 10,
      },
      {
        title: "Apple Watch SE Silver Aluminum 44mm Case",
        description: "Silver Aluminum Case with Solo Loop",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 279,
        stock: 10,
      },
      {
        title: "Apple Watch SE Starlight Aluminum 44mm Case",
        description: "Starlight Aluminum Case with Sport Loop",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 279,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "Bright Crimson/Gym Red - 41mm Case ",
        description: "Apple Watch Series 8 - Nike Band",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 49,
        stock: 10,
      },
      {
        title: "Bright Crimson/Gym Red - 45mm Case ",
        description: "Apple Watch Series 8 - Nike Band",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 49,
        stock: 10,
      },
      {
        title: "Royal/Midnight Navy Nike Sport Loop - 41mm Case ",
        description: "Apple Watch Series 8 - Nike Band",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 49,
        stock: 10,
      },
      {
        title: "Royal/Midnight Navy Nike Sport Loop - 45mm Case ",
        description: "Apple Watch Series 8 - Nike Band",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 49,
        stock: 10,
      },
      {
        title: "Pride Edition Nike Sport Loop - 41mm Case ",
        description: "Apple Watch Series 8 - Nike Band",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 49,
        stock: 10,
      },
      {
        title: "Pride Edition Nike Sport Loop - 45mm Case ",
        description: "Apple Watch Series 8 - Nike Band",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 49,
        stock: 10,
      },
    ],
  },
  {
    payload: [
      {
        title: "Apple Watch Hermès - Casaque Single Tour",
        description: "Silver Stainless Steel 45mm case, GPS + Cellular connectivity ",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1299,
        stock: 10,
      },
      {
        title: "Apple Watch Hermès - Casaque Double Tour",
        description: "Silver Stainless Steel 41mm case, GPS + Cellular connectivity ",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1599,
        stock: 10,
      },
      {
        title: "Apple Watch Hermès - Attelage Double Tour",
        description: "Silver Stainless Steel 41mm case, GPS + Cellular connectivity ",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1399,
        stock: 10,
      },
      {
        title: "Apple Watch Hermès - Single Tour",
        description: "Silver Stainless Steel 41mm case, GPS + Cellular connectivity ",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1249,
        stock: 10,
      },
      {
        title: "Apple Watch Hermès - Single Tour",
        description: "Silver Stainless Steel 45mm case, GPS + Cellular connectivity ",
        pictures: {
          featured: "",
          gallery: [""],
        },
        price: 1299,
        stock: 10,
      },
    ],
  },
];

const products = [
  {
    categoryKey: "mac",
    key: "macbook-air",
    title: "MacBook Air",
    catchline: "Power. It's in the Air.",
    description: "Apple M1 chip, 8-core CPU, 2TB maximum storage",
    basePrice: 999,
    currency: { code: "USD", symbol: "$" },
    modelsId: "1LJSM2H9FYl3rTcR4PEv",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryKey: "mac",
    key: "macbook-pro",
    title: "MacBook Pro",
    catchline: "Mover. Maker. Boundary breaker.",
    description: "Supercharged by M2 chip, Up to 20 hrs battery life",
    basePrice: 1299,
    currency: { code: "USD", symbol: "$" },
    modelsId: "3WqIwqP1CeIi6fff6JVY",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryKey: "mac",
    key: "imac",
    title: "iMac",
    catchline: "Works smarter.Goes further.",
    description: "Transformed by the M1 chip. Stands out in any space.",
    basePrice: 1299,
    currency: { code: "USD", symbol: "$" },
    modelsId: "x1LdkTw7cIlr5LMFYVeC",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryKey: "mac",
    key: "mac-mini",
    title: "Mac mini",
    catchline: "More muscle.More hustle.",
    description:
      "Mac mini with M2 packs the speed you need to get more done faster.",
    basePrice: 599,
    currency: { code: "USD", symbol: "$" },
    modelsId: "dBFEaD4SqoMO30KSUGiy",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryKey: "mac",
    key: "mac-studio",
    title: "Mac Studio",
    catchline: "Empower station.",
    description:
      "Experience the most powerful chip ever in a personal computer",
    basePrice: 1999,
    currency: { code: "USD", symbol: "$" },
    modelsId: "i9pCGumoiG9iMKyYUlpZ",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryKey: "mac",
    key: "mac-pro",
    title: "Mac Pro",
    catchline: "Powerfully purposeful.",
    description: "Up to 28 cores of power. Create without constraint.",
    basePrice: 5999,
    currency: { code: "USD", symbol: "$" },
    modelsId: "YktSci5xCdgo89ngEETp",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "ipad",
    key: "ipad-pro",
    title: "iPad Pro",
    catchline: "Supercharged by M2",
    description:
      "The ultimate iPad experience with the most advanced technology.",
    basePrice: 799,
    currency: { code: "USD", symbol: "$" },
    modelsId: "F3V084woTu7MjKBqHtTF",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "ipad",
    key: "ipad-air",
    title: "iPad Air",
    catchline: "Light. Bright. Full of might.",
    description: "Serious performance in a thin and light design.",
    basePrice: 599,
    currency: { code: "USD", symbol: "$" },
    modelsId: "b2K0pqP9EVRCKpJqyHEA",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "ipad",
    key: "ipad-10",
    title: "iPad 10th",
    catchline: "All screen. All colorful.",
    description: "The all-new colorful iPad for the things you do every day.",
    basePrice: 449,
    currency: { code: "USD", symbol: "$" },
    modelsId: "y80wc8NJ2pqCY61fzKYZ",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "ipad",
    key: "ipad-9",
    title: "iPad 9th",
    catchline: "Write it down. Type it up.",
    description: "All the essentials in the most affordable iPad.",
    basePrice: 329,
    currency: { code: "USD", symbol: "$" },
    modelsId: "vtNgNEXzta1BQ2aHuklp",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "ipad",
    key: "ipad-mini",
    title: "iPad mini",
    catchline: "A device unlike any other.",
    description: "The full iPad experience designed to fit in one hand.",
    basePrice: 499,
    currency: { code: "USD", symbol: "$" },
    modelsId: "1Ne8D56WjwbqpivZzxtF",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "iphone",
    key: "iphone-14-pro",
    title: "iPhone 14 Pro",
    catchline: "Pro. Beyond.",
    description: "iPhone 14 Pro and iPhone 14 Pro Max",
    basePrice: 999,
    currency: { code: "USD", symbol: "$" },
    modelsId: "n51IwHvQRBVjg1sm7diA",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "iphone",
    key: "iphone-14",
    title: "iPhone 14",
    catchline: "A total powerhouse.",
    description: "iPhone 14 and iPhone 14 Plus",
    basePrice: 799,
    currency: { code: "USD", symbol: "$" },
    modelsId: "V51Px5ab4HweFy1VjDha",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "iphone",
    key: "iphone-13",
    title: "iPhone 13",
    catchline: "As amazing as ever.",
    description: "iPhone 14 and iPhone 14 mini",
    basePrice: 599,
    currency: { code: "USD", symbol: "$" },
    modelsId: "zlmzlCxLGG2CRcy7YxWP",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "iphone",
    key: "iphone-se",
    title: "iPhone SE",
    catchline: "Serious power. Serious value.",
    description: "The same superpowerful A15 Bionic chip that's in iPhone 13.",
    basePrice: 429,
    currency: { code: "USD", symbol: "$" },
    modelsId: "MlGWYmoxtCyr2s8xPM0Q",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "watch",
    key: "watch-ultra",
    title: "Apple Watch Ultra",
    catchline: "Adventure awaits.",
    description: "Meet the most rugged and capable Apple Watch ever.",
    basePrice: 799,
    currency: { code: "USD", symbol: "$" },
    modelsId: "rklEKEgNIMS9PgtO3ceZ",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "watch",
    key: "watch-series-8",
    title: "Apple Watch Series 8",
    catchline: "A healthy leap ahead.",
    description: "Your essential companion is even more powerful.",
    basePrice: 399,
    currency: { code: "USD", symbol: "$" },
    modelsId: "YuBWiFTKMxInrD2xB6Ad",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "watch",
    key: "watch-se",
    title: "Apple Watch SE",
    catchline: "A great deal to love.",
    description: "Powerful sensors for insights about your health and fitness.",
    basePrice: 249,
    currency: { code: "USD", symbol: "$" },
    modelsId: "gvbUujL6V596E0hmws4Y",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "watch",
    key: "watch-nike",
    title: "Apple Watch Nike Bands",
    catchline: "Run with it.",
    description: "Take your running even further.",
    basePrice: 49,
    currency: { code: "USD", symbol: "$" },
    modelsId: "q3EsDxngretv5SC71zfn",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
  {
    categoryId: "watch",
    key: "watch-hermes",
    title: "Apple Watch Hermès",
    catchline: "Artistry in full bloom.",
    description: "An Apple Watch Series 8 built on a shared foundation of innovation and uncompromising design.",
    basePrice: 1249,
    currency: { code: "USD", symbol: "$" },
    modelsId: "XyxFhQ7jdR1aThz1S4XF",
    productPictures: {
      featured: "",
      gallery: [""],
    },
  },
];

const categories = [
  {
    key: "mac",
    title: "Mac",
    sectionSubtitle: "Which Mac is right for you?",
    featuredProductId: "XmE0V7lMRJHwMRFLQZax",
  },
  {
    key: "ipad",
    title: "iPad",
    sectionSubtitle: "Which iPad is right for you?",
    featuredProductId: "4YZ1RQpUhFC5vgpAr1iB",
  },
  {
    key: "iphone",
    title: "iPhone",
    sectionSubtitle: "Love the power.Love the price.",
    featuredProductId: "yPzobmNe6E4uRXfCBoOC",
  },
  {
    key: "watch",
    title: "Watch",
    sectionSubtitle: "A healthy leap ahead.",
    featuredProductId: "Jzb6GR7Msvb09BOnBc2I",
  },

];

export {categories, products, models};

// Categories
// {
//   key: "airpods",
//   title: "AirPods",
//   sectionSubtitle: "A magical connection to your devices.",
//   featuredProductId: "",
// },