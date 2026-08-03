import type { Product } from "../types/Product";

export const products: Product[] = [
  // ======================= LAPTOPS =======================

  {
    id: 1,
    name: "Apple MacBook Air M3",
    price: 1299.99,
    category: "Laptop",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzxEi17JDy87jjU8Y9NtUhGFC7nwjmbeUMsEdj_UtElFAVGoiG0P-f0xh&s=10",
    description:
      "Apple M3 Chip\n13.6-inch Liquid Retina Display\n16GB RAM\n512GB SSD\n18 Hours Battery Life",
  },

  {
    id: 2,
    name: "ASUS ROG Strix G16",
    price: 1699.99,
    category: "Laptop",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWLZefrxDni0J4FJwxUKAD5rKFi3ytw0aFSjszKFx-A&s=10",
    description:
      "Intel Core i9\nRTX 4070\n16GB DDR5 RAM\n1TB SSD\n16-inch 165Hz Display",
  },

  {
    id: 3,
    name: "Lenovo LOQ 15IRX9",
    price: 1199.99,
    category: "Laptop",
    img: "https://dkstatics-public.digikala.com/digikala-products/fe3af2a9a03967de99e0c8f44d35f5d58b3621b3_1736428388.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    description:
      "Intel Core i7-13650HX\nRTX 4060\n16GB RAM\n512GB SSD\n15.6-inch FHD 144Hz",
  },

  {
    id: 4,
    name: "Dell XPS 15",
    price: 1899.99,
    category: "Laptop",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpPMOszjap1eVIv2eQmqsuNv1okjSEePpV46-a_DdkXFLOwQLox53fWGzD&s=10",
    description:
      "Intel Core Ultra 7\nRTX 4050\n16GB RAM\n1TB SSD\n15.6-inch OLED Display",
  },

  // ======================= MOBILES =======================

  {
    id: 5,
    name: "Xiaomi POCO X6 5G",
    price: 399.99,
    category: "Mobile",
    img: "https://ph-test-11.slatic.net/p/2df7fe5fd4a82ab88e44737394b6ac8a.png",
    description:
      "Snapdragon 7s Gen 2\n12GB RAM\n256GB Storage\n5100mAh Battery\n120Hz AMOLED Display",
  },

  {
    id: 6,
    name: "Xiaomi 13T Pro",
    price: 599.99,
    category: "Mobile",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaoPq9uFAoO3fLPwwYx1RwVCceT4UHaApKInlBaTMm9A&s=10",
    description:
      "Dimensity 9200+\n12GB RAM\n512GB Storage\nLeica Camera\n144Hz AMOLED Display",
  },

  {
    id: 7,
    name: "Samsung Galaxy S24 Ultra",
    price: 1299.99,
    category: "Mobile",
    img: "https://www.tech-tiger.co.uk/cdn/shop/files/samsung-galaxy-s24-ultra-5g-1754221.png?crop=center&height=2048&v=1769449520&width=2048",
    description:
      "Snapdragon 8 Gen 3\n12GB RAM\n512GB Storage\n200MP Camera\n6.8-inch Dynamic AMOLED",
  },

  {
    id: 8,
    name: "Apple iPhone 16 Pro",
    price: 1399.99,
    category: "Mobile",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWGQvLGeOd_0fc-mP-IXaRsS7hhjOF69HeVfseaTFsGyLigR0ZNu-XrE&s=10",
    description:
      "Apple A18 Pro\n256GB Storage\n48MP Camera\n6.3-inch Super Retina XDR\nTitanium Design",
  },
    // ======================= FLASH DRIVES =======================

  {
    id: 9,
    name: "SanDisk Ultra 64GB USB 3.0",
    price: 14.99,
    category: "Flash",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheYtnstFy42FKsF0y0dvWrUQ6bPOxhEXr8lNKFr2VdA&s=10",
    description:
      "64GB Capacity\nUSB 3.0\nUp to 130MB/s Read Speed\nLightweight Design\nCompatible with Windows & macOS",
  },

  {
    id: 10,
    name: "Kingston DataTraveler Exodia 128GB",
    price: 19.99,
    category: "Flash",
    img: "https://media.kingston.com/kingston/product/DTX_128GB-zm-lg.jpg",
    description:
      "128GB Capacity\nUSB 3.2\nProtective Cap\nFast Data Transfer\nCompact Design",
  },

  {
    id: 11,
    name: "Samsung BAR Plus 256GB",
    price: 39.99,
    category: "Flash",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRWZvziAlB-uIWmCRqAr8rrz3Vhy5PNzucgOPpiACMiUoSHGHQiwgn19g&s=10",
    description:
      "256GB Capacity\nUSB 3.1\nMetal Body\nWater Resistant\n300MB/s Read Speed",
  },

  {
    id: 12,
    name: "ADATA UV150 64GB",
    price: 12.99,
    category: "Flash",
    img: "https://www.technolife.com/image/color_image_TLP-32268_1a1a1a_b024f850-d789-4fe3-9d2d-b4cb217b11c6.png",
    description:
      "64GB Capacity\nUSB 3.2\nSliding USB Connector\nCompact Size\nReliable Performance",
  },

  // ======================= AIRPODS =======================

  {
    id: 13,
    name: "Apple AirPods Pro (2nd Gen)",
    price: 249.99,
    category: "AirPods",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83",
    description:
      "Active Noise Cancellation\nTransparency Mode\nUSB-C Charging Case\nSpatial Audio\nUp to 30 Hours Battery",
  },

  {
    id: 14,
    name: "Samsung Galaxy Buds3 Pro",
    price: 199.99,
    category: "AirPods",
    img: "https://sedastore.com/images/HEADPHONE/SAMSUNG/BUDS%203%20PRO/1.jpg",
    description:
      "Active Noise Cancellation\n24-bit Hi-Fi Audio\nIP57 Water Resistance\nWireless Charging\nBluetooth 5.4",
  },

  {
    id: 15,
    name: "Xiaomi Buds 5 Pro",
    price: 149.99,
    category: "AirPods",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5n1wQyb6qJRBTT5T-D4uJL8oDz8n6rCntJdtXe4xjyvu62adgRUMv80&s=10",
    description:
      "Hi-Res Audio\nActive Noise Cancellation\nBluetooth 5.4\n38 Hours Battery\nFast Charging",
  },

  {
    id: 16,
    name: "QCY T13 ANC",
    price: 39.99,
    category: "AirPods",
    img: "https://dkstatics-public.digikala.com/digikala-products/9efa12f58a561518233adc67b3a6d8fa5982817f_1745824976.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    description:
      "ANC Noise Cancellation\nBluetooth 5.3\n30 Hours Battery\nGaming Mode\nIPX5 Water Resistant",
  }
];