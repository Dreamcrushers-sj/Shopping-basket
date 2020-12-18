import { ProductItem } from "../global"

const INITIAL_STATE: ProductItem[] = [
  {
    id: "123",
    title: "Blue t-shirt",
    description: "No fancy sizing charts here, one t-shirt size to rule them all",
    imageUrl: "/blue-tshirt.png",
    price: 1500
  },
  {
    id: "456",
    title: "Black t-shirt",
    description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
    imageUrl: "/black-tshirt.png",
    price: 1200
  },
  {
    id: "789",
    title: "White t-shirt",
    description: "The only product on our site that might actually be worth buying",
    imageUrl: "/white-tshirt.jpg",
    price: 1900
  }
  
]

export { INITIAL_STATE }
