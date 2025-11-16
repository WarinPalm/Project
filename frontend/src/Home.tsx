// src/Home.tsx
import { useOutletContext } from "react-router-dom";
import products from "./Product";
import type { CartContextType } from "./components/layout";

// (Interface Product อยู่ใน Product.tsx แล้ว แต่ถ้าต้องการก็ประกาศซ้ำได้)
interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
}

export default function Home() {
  // 3. รับ state จาก Layout ผ่าน useOutletContext
  const { setCart } = useOutletContext<CartContextType>();

  // 4. ลบ useEffect และ state ทั้งหมดออก (ย้ายไป Layout แล้ว)

  const addToCart = (id: number) => {
    const product = products.find((p: Product) => p.id === id); // 5. FIX: ใช้ 'products'
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      {/* 6. FIX: ลบ <header> ออก (ย้ายไป Layout แล้ว) */}

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p: Product) => ( // 7. FIX: ใช้ 'products.map'
          <div
            key={p.id}
            className="bg-white shadow rounded-xl p-4 flex flex-col gap-2"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-blue-600 font-bold">
              ฿{p.price.toLocaleString()}
            </p>
            <button
              onClick={() => addToCart(p.id)}
              className="bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
            >
              เพิ่มลงตะกร้า
            </button>
          </div>
        ))}
      </main>
      
      {/* 8. FIX: ลบ <CartPanel> ออก (มันเป็นหน้าของตัวเอง) */}
    </div>
  );
}