// src/Layout.tsx
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

// 1. ย้าย Interface มาไว้ที่นี่ (หรือไฟล์ types)
export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
}

// 2. สร้าง Type สำหรับ Context ที่จะส่งให้ลูก
export type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export default function Layout() {
  // 3. ย้าย State และ useEffect ทั้งหมดจาก App.tsx มาไว้ที่นี่
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="w-screen min-h-screen bg-gray-50">
      {/* 4. ย้าย Header จาก Home.tsx มาไว้ที่นี่ */}
      <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          🛍️ ร้านค้า
        </Link>
        <div className="flex gap-2">
          <Link
            to="/register"
            className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold"
          >
            สมัครบัญชี
          </Link>
          <Link
            to="/cart"
            className="bg-green-500 text-white px-3 py-1 rounded-lg font-semibold"
          >
            ดูตะกร้า ( {cart.reduce((sum, i) => sum + i.qty, 0)} )
          </Link>
        </div>
      </header>

      {/* 5. <Outlet /> คือจุดที่ Page (Home, Cart, Checkout) 
            จะถูก Render และเราส่ง cart state ลงไปด้วย context
      */}
      <main>
        <Outlet context={{ cart, setCart }} />
      </main>
    </div>
  );
}