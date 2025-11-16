// src/data/products.ts (หรือ src/Product.tsx)

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "กระเป๋า",
    price: 390,
    category: "กระเป๋า",
    img: "/product/BLACKMORAL.jpg",
  },
  {
    id: 2,
    name: "เสื้อเชิ้ต",
    price: 590,
    category: "เสื้อผ้า",
    img: "/product/เสื้อยืดแขนสั้นคอกลม.jpg",
  },
  {
    id: 3,
    name: "นาฬิกาข้อมือ",
    price: 990,
    category: "นาฬิกา",
    img: "/product/il_fullxfull.6717931462_jx8d.avif",
  },
  {
    id: 4,
    name: "รองเท้า",
    price: 290,
    category: "รองเท้า",
    img: "/product/Urbanoscostumatizados.jpg",
  },
  {
    id: 5,
    name: "หูฟังบลูทูธ",
    price: 1290,
    category: "อุปกรณ์",
    img: "/product/download.jpg",
  },
];

export default products;