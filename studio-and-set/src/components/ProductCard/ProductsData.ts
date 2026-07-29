// src/data/productsData.ts

export interface ColorOption {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'apparel' | 'footwear' | 'accessories';
  gender: 'men' | 'women' | 'unisex';
  description: string;
  image: string; // Single high-res asset path
  featured?: boolean;
  inStock: boolean;
  sizes: string[];
  colors: ColorOption[];
}

// Global sensible defaults for sizes and colors based on category types
const DEFAULT_APPAREL_SIZES = ["S", "M", "L"];
const DEFAULT_FOOTWEAR_SIZES = ["UK 7", "UK 8", "UK 9", "UK 10"];
const DEFAULT_ACCESSORY_SIZES = ["O/S"]; // One Size

const DEFAULT_COLORS: ColorOption[] = [
  { name: "Slick Black", hex: "#1A1A1A" },
  { name: "Studio Charcoal", hex: "#404040" },
  { name: "Safety Orange", hex: "#FF6B00" }
];

export const products: Product[] = [
  // --- FEATURED HOME PAGE ITEMS ---
  {
    id: "prod_01",
    name: "Quick Dry, Slim Fit - Weather Jacket",
    price: 1850,
    category: "apparel",
    gender: "unisex",
    description: "Ultra-lightweight, windproof shell designed with high-stretch elastane for extreme range of motion on set. Complete with fully taped water-resistant seams.",
    image: "/assets/store/weather-jacket.jpg",
    featured: true,
    inStock: true,
    sizes: DEFAULT_APPAREL_SIZES,
    colors: [
      { name: "Maroon", hex: "#4A001E" },
      { name: "Mint", hex: "#00FF9D" },
      { name: "Yellow", hex: "#FFEE00" }
    ]
  },
  {
    id: "prod_02",
    name: "Warmth Retainer - Winter Jacket",
    price: 2400,
    category: "apparel",
    gender: "unisex",
    description: "Heavy-duty thermal insulated parka built for long overnight shoots in freezing winter conditions. Features extra deep fleece-lined hand pockets.",
    image: "/assets/store/winter-jacket.jpg",
    featured: true,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Slick Black", hex: "#1A1A1A" },
      { name: "Navy Blue", hex: "#1E2A38" }
    ]
  },
  {
    id: "prod_03",
    name: "Quick Clean Hard Shell - Sneaker",
    price: 1650,
    category: "footwear",
    gender: "unisex",
    description: "Durable hard-shell sneaker designed to withstand grease, water, and debris on-set. Easy-wipe finish with orthopedic arch support for 14-hour standing shifts.",
    image: "/assets/store/hard-shell-sneaker.jpg",
    featured: true,
    inStock: true,
    sizes: DEFAULT_FOOTWEAR_SIZES,
    colors: [
      { name: "Slick Black", hex: "#1A1A1A" },
      { name: "Studio White", hex: "#EAEAEA" }
    ]
  },

  // --- GENERAL APPAREL ---
  {
    id: "prod_04",
    name: "Heavy-Duty Ripstop - Crew Pant",
    price: 950,
    category: "apparel",
    gender: "men",
    description: "Tear-resistant double-layered cotton duck fabric pants with integrated utility hammer loop and reinforced knee padding compartments.",
    image: "/assets/store/ripstop-crew-pant.jpg",
    inStock: true,
    sizes: ["30", "32", "34", "36"],
    colors: [{ name: "Khaki", hex: "#C2B280" }, { name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_05",
    name: "Reinforced Double-Knee - Utility Pant",
    price: 950,
    category: "apparel",
    gender: "women",
    description: "Form-fitting but rugged canvas utility pants featuring multi-tool slide slots and high waist support designed specifically for female operators.",
    image: "/assets/store/utility-pant-women.jpg",
    inStock: true,
    sizes: ["28", "30", "32", "34"],
    colors: [{ name: "Olive Green", hex: "#3B5323" }, { name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_06",
    name: "Thermal Fleece - Midlayer Hood",
    price: 800,
    category: "apparel",
    gender: "unisex",
    description: "Breathable grid-fleece hoodie offering excellent warmth-to-weight ratio. Packs down ultra-small into modular rigging pouches.",
    image: "/assets/store/thermal-fleece.jpg",
    inStock: true,
    sizes: DEFAULT_APPAREL_SIZES,
    colors: DEFAULT_COLORS
  },
  {
    id: "prod_07",
    name: "Anti-Static - Merino Base Layer",
    price: 650,
    category: "apparel",
    gender: "men",
    description: "100% merino wool long sleeve base layer. Odor-resistant, moisture-wicking, and completely anti-static for safety around delicate electronic camera sensors.",
    image: "/assets/store/merino-base-men.jpg",
    inStock: true,
    sizes: DEFAULT_APPAREL_SIZES,
    colors: [{ name: "Charcoal", hex: "#404040" }]
  },
  {
    id: "prod_08",
    name: "Anti-Static - Merino Base Layer",
    price: 650,
    category: "apparel",
    gender: "women",
    description: "Premium merino base layer with contoured ventilation zones under the arms to regulate temperature on active sets.",
    image: "/assets/store/merino-base-women.jpg",
    inStock: true,
    sizes: DEFAULT_APPAREL_SIZES,
    colors: [{ name: "Charcoal", hex: "#404040" }]
  },
  {
    id: "prod_09",
    name: "Riggers Utility Vest - Slick Black",
    price: 1100,
    category: "accessories",
    gender: "unisex",
    description: "Load-bearing utility vest containing tactical chest rings, D-clip hook zones, and customizable modular velcro attachment patches.",
    image: "/assets/store/utility-vest.jpg",
    inStock: true,
    sizes: ["S/M", "L/XL"],
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_10",
    name: "Lightweight Breathable - Crew Tee",
    price: 350,
    category: "apparel",
    gender: "unisex",
    description: "Sleek, minimalist crewneck t-shirt. Breathable tri-blend mesh panel on the back prevents camera harness sweat accumulation.",
    image: "/assets/store/crew-tee.jpg",
    inStock: true,
    sizes: DEFAULT_APPAREL_SIZES,
    colors: DEFAULT_COLORS
  },

  // --- FOOTWEAR ---
  {
    id: "prod_11",
    name: "Steel Toe Cap - All-Terrain Boot",
    price: 2100,
    category: "footwear",
    gender: "men",
    description: "Impact-resistant steel toe safety boots equipped with thick puncture-proof rubber outsoles and speed-lacing ankle support.",
    image: "/assets/store/steel-toe-boot.jpg",
    inStock: true,
    sizes: DEFAULT_FOOTWEAR_SIZES,
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_12",
    name: "Steel Toe Cap - All-Terrain Boot",
    price: 2100,
    category: "footwear",
    gender: "women",
    description: "Heavy duty defensive footwear scaled and molded specifically for women's feet, maintaining complete flexibility without compromising armor.",
    image: "/assets/store/steel-toe-boot-women.jpg",
    inStock: true,
    sizes: ["UK 4", "UK 5", "UK 6", "UK 7"],
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_13",
    name: "Waterproof Mud-Slogger - Crew Boot",
    price: 1750,
    category: "footwear",
    gender: "unisex",
    description: "Vulkanized neoprene and natural rubber boots built for messy outdoor forest, beach, and swamp set locations. 100% waterproof barrier.",
    image: "/assets/store/mud-slogger-boot.jpg",
    inStock: true,
    sizes: DEFAULT_FOOTWEAR_SIZES,
    colors: [{ name: "Muddy Olive", hex: "#556B2F" }]
  },
  {
    id: "prod_14",
    name: "Lightweight Studio - Slip-On Sneaker",
    price: 1200,
    category: "footwear",
    gender: "unisex",
    description: "Quiet-step rubber slip-ons designed for maximum acoustic muting inside sound stages to protect audio track recordings.",
    image: "/assets/store/slip-on-sneaker.jpg",
    inStock: true,
    sizes: DEFAULT_FOOTWEAR_SIZES,
    colors: [{ name: "Studio Charcoal", hex: "#404040" }]
  },

  // --- ACCESSORIES & GEAR ---
  {
    id: "prod_15",
    name: "Touchscreen-Ready - Riggers Gloves",
    price: 450,
    category: "accessories",
    gender: "unisex",
    description: "Kevlar-stitched gloves offering heat resistance for adjusting hot lighting fixtures, paired with highly precise touchscreen conductive fingertips.",
    image: "/assets/store/riggers-gloves.jpg",
    inStock: true,
    sizes: ["M", "L"],
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_16",
    name: "Heavy-Duty - Gaffer Belt Bag",
    price: 550,
    category: "accessories",
    gender: "unisex",
    description: "Heavy-duty canvas accessory pouch featuring custom loop slots for holding multi-tools, flashlights, and a dedicated strap for gaffer tape rolls.",
    image: "/assets/store/gaffer-belt-bag.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_17",
    name: "Polarized UV-Shield - Operator Eyewear",
    price: 750,
    category: "accessories",
    gender: "unisex",
    description: "Tactical safety sunglasses featuring anti-fog lenses with 100% UV protection. Guards your eyes from bright light leaks and laser indicators.",
    image: "/assets/store/operator-eyewear.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_18",
    name: "Waterproof Tech Pack - 35L",
    price: 1450,
    category: "accessories",
    gender: "unisex",
    description: "Roll-top dry bag pack configured with velvet-lined protective dividers to cradle laptops, lenses, and sensitive monitor controllers.",
    image: "/assets/store/tech-pack.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_19",
    name: "Fleece-Lined - Winter Beanie",
    price: 280,
    category: "accessories",
    gender: "unisex",
    description: "Insulated waffle-knit beanie. Flat-seam construction fits comfortably underneath headphones and safety hardhats.",
    image: "/assets/store/winter-beanie.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: DEFAULT_COLORS
  },
  {
    id: "prod_20",
    name: "Anti-Dust - Cotton Neck Gaiter",
    price: 180,
    category: "accessories",
    gender: "unisex",
    description: "Multi-functional stretch gaiter shielding your throat and face from kicking dust on dry desert studio backlots.",
    image: "/assets/store/neck-gaiter.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: DEFAULT_COLORS
  },
  {
    id: "prod_21",
    name: "Modular - Shoulder Radio Pouch",
    price: 320,
    category: "accessories",
    gender: "unisex",
    description: "Universal security walkie-talkie chest and shoulder holster with quick-release clips for seamless communication accessibility.",
    image: "/assets/store/radio-pouch.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_22",
    name: "Reinforced Rigging - Pant Belt",
    price: 400,
    category: "accessories",
    gender: "unisex",
    description: "High-grade military spec nylon web belt containing a rapid click-lock aluminum cobra buckle.",
    image: "/assets/store/rigging-belt.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_23",
    name: "Anti-Fatigue - Crew Socks Pack",
    price: 250,
    category: "accessories",
    gender: "unisex",
    description: "Pack of 3 heavy cushion compression socks with targeted elastic wrapping to eliminate foot cramps on high-hour shifts.",
    image: "/assets/store/crew-socks.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  },
  {
    id: "prod_24",
    name: "Water-Resistant - Rain Brim Hat",
    price: 480,
    category: "accessories",
    gender: "unisex",
    description: "Wide brim outdoor hat made of high-grade hydrophobic nylon to shed continuous torrential downpours off your face.",
    image: "/assets/store/rain-brim-hat.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: DEFAULT_COLORS
  },
  {
    id: "prod_25",
    name: "Extreme Condition - Hand Warmers Set",
    price: 150,
    category: "accessories",
    gender: "unisex",
    description: "Reusable pocket hand warmer pods activated with a simple internal snap click to keep operator fingers responsive.",
    image: "/assets/store/hand-warmers.jpg",
    inStock: true,
    sizes: DEFAULT_ACCESSORY_SIZES,
    colors: [{ name: "Slick Black", hex: "#1A1A1A" }]
  }
];