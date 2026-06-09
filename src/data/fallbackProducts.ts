import { Product } from "../types";
import creamBlouseImg from "../assets/images/cream_bow_blouse.png";
import olivePantsImg from "../assets/images/olive_wide_pants.png";
import polkaDotDressImg from "../assets/images/polka_dot_dress.png";

export const STATIC_FALLBACK_PRODUCTS: Product[] = [
  {
    id: "prod-cas-blouse",
    name: "Cream Silk Bow-Neck Blouse",
    image: creamBlouseImg,
    price: 110,
    size: "S, M, L, XL",
    category: "top",
    colour: "Cream",
    occasion: "Casual",
    occasions: ["casual"],
    shapes: ["Hourglass", "Pear", "Apple", "Rectangle", "Inverted Triangle"],
    inStock: true
  },
  {
    id: "prod-cas-trousers",
    name: "Olive Green Wide-Leg Trousers",
    image: olivePantsImg,
    price: 95,
    size: "S, M, L",
    category: "bottom",
    colour: "Olive Green",
    occasion: "Casual",
    occasions: ["casual"],
    shapes: ["Hourglass", "Pear", "Apple", "Rectangle"],
    inStock: true
  },
  {
    id: "prod-cas-polka-dress",
    name: "Polka Dot Bustier Dress",
    image: polkaDotDressImg,
    price: 125,
    size: "XS, S, M, L",
    category: "top",
    colour: "Black & White",
    occasion: "Casual",
    occasions: ["casual"],
    shapes: ["Hourglass", "Pear", "Rectangle", "Inverted Triangle"],
    inStock: true
  }
];
