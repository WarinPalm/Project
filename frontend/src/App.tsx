// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import Cart from "./Cart";
import Register from "./Register";
import CheckoutPage from "./CheckoutPage";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // โหลด cart จาก localStorage ตอนเริ่มแรก
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // เก็บ cart ทุกครั้งที่มีการเปลี่ยนแปลง
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
    
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}
