// src/pages/Home.tsx
import { useEffect } from "react";
import ProductPage from "./Product"; 
import CartPanel from "./Cart";

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
}

interface CartItem extends Product {
  qty: number;
}

interface HomeProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function Home({ cart, setCart }: HomeProps) {

  // บันทึก cart ลง localStorage ทุกครั้งที่เปลี่ยน
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id: number) => {
    const product = ProductPage.find((p: Product) => p.id === id);
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
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">🛍️ ร้านค้า傻逼</h1>
        <div className="flex gap-2">
          <a href="/register" className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold">
            สมัครบัญชี
          </a>
          <a href="/cart" className="bg-green-500 text-white px-3 py-1 rounded-lg font-semibold">
            ดูตะกร้า
          </a>
        </div>
      </header>

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProductPage.map((p: Product) => (
          <div key={p.id} className="bg-white shadow rounded-xl p-4 flex flex-col gap-2">
            <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded" />
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-blue-600 font-bold">฿{p.price.toLocaleString()}</p>
            <button
              onClick={() => addToCart(p.id)}
              className="bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
            >
              เพิ่มลงตะกร้า
            </button>
          </div>
        ))}
      </main>

      <CartPanel cart={cart} setCart={setCart} />
    </div>
  );
}
