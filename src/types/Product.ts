export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: "Laptop" | "Mobile" | "Flash" | "AirPods";
  description: string;
}