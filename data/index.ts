export interface Product {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
  allergens: string;
  ingredients: string;
  bgColor: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

// /images/yellowboba.png"
// /images/pinkboba.png"
// /images/greenboba.png"

export const products: Product[] = [
  {
    id: "1",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Brown sugar Milk",
    description: "Fresh milk with decadent brown sugar syrup and tapioca pearls.",
    price: 6.50,
    allergens: "Milk",
    ingredients: "Milk, brown sugar syrup, tapioca pearls(tapioca starch, water)",
    bgColor: "yellow",
    category: "milk"
  },
  {
    id: "2",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Taro Milk Tea",
    description: "Sweet taro root (it tastes like cookies!) with milk, jasmine tea and tapioca.",
    price: 6.50,
    allergens: "Milk",
    ingredients: "Milk, taro powder(taro extract, taro flavor, maltodextrin) tapioca pearls (tapioca starch, water)",
    bgColor: "bigMatchaCard",
    category: "milk"
  },
  {
    id: "3",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Milk Tea",
    description: "Classic milk tea made from black tea, served with tapioca.",
    price: 6.50,
    allergens: "Milk",
    ingredients: "Milk, black tea, tapioca pearls(tapioca starch, water)",
    bgColor: "#EEA6B4",
    category: "milk"
  },
  {
    id: "4",
    image: "/images/greenboba.png",
    imageAlt: "boba",
    title: "Matcha Milk Tea",
    description: "A fan favorite made with green tea, oat milk and tapioca.",
    price: 6.50,
    allergens: "Gluten",
    ingredients: "Oat milk, matcha, tapioca pearls (tapioca starch, water)",
    bgColor: "bigMatchaCard",
    category: "milk"
  },
  {
    id: "5",
    image: "/images/yellowboba.png",
    imageAlt: "boba",
    title: "Thai Iced Tea",
    description: "Sugar spice and everything nice. Our Thai Iced Tea is made with black tea, spices and sweetened condensed milk.",
    price: 6.50,
    allergens: "Milk",
    ingredients: "Black tea, sugar, condensed milk, spices(anise, cardamom, cinnamon, vanilla bean, almond extract) tapioca pearls (tapioca starch, water)",
    bgColor: "yellowCardCircle",
    category: "milk"
  },
  {
    id: "6",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Peach Fruit Tea",
    description: "A classic iced tea made with green tea and served with coco jelly, perfect for summer days.",
    price: 6.00,
    allergens: "",
    ingredients: "Water, black tea, peach syrup(fructose, water, sugar, peach concentrate), sugar, peach pearls(fructose, peach juice, starch)",
    bgColor: "#EEA6B4",
    category: "fruit"
  },
  {
    id: "7",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Passion Fruit Tea",
    description: "We've got passion for passion! This black tea with coco jelly quenches any thirst.",
    price: 6.00,
    allergens: "",
    ingredients: "Water, black tea, passion syrup(fructose, water, sugar, passion concentrate), sugar, passion pearls(fructose, passion juice, starch)",
    bgColor: "#EEA6B4",
    category: "fruit"
  },
  {
    id: "8",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Strawberry Fruit Tea",
    description: "Sweet strawberry tea made with black tea, strawberry syrup and strawberry popping boba.", 
    price: 6.00,
    allergens: "",
    ingredients: "Water, black tea, strawberry syrup(fructose, water, sugar, strawberry concentrate), sugar, strawberry pearls(fructose, strawberry juice, starch)",
    bgColor: "yellowCardCircle",
    category: "fruit"
  },
  {
    id: "9",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Blueberry Fruit Tea",
    description: "Green tea with blue balls.",
    price: 6.00,
    allergens: "",
    ingredients: "Water, black tea, blueberry syrup(fructose, water, sugar, blueberry concentrate), sugar, blueberry pearls(fructose, blueberry juice, starch)",
    bgColor: "bigMatchaCard",
    category: "fruit"
  },
  {
    id: "10",
    image: "/images/pinkboba.png",
    imageAlt: "boba",
    title: "Oolong Tea",
    description: "A hybrid of green and black tea, served with tapioca.",
    price: 6.00,
    allergens: "",
    ingredients: "Water, oolong tea, fructose, tapioca pearls(tapioca starch, water",
    bgColor: "yellowCardCircle",
    category: "milk"
  },
];


