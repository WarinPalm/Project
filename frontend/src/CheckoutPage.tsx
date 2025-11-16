// src/CheckoutPage.tsx
import { useOutletContext, useNavigate } from "react-router-dom"; // 1. Import hooks
import type { CartContextType } from "./components/layout";

export default function CheckoutPage() {
  // 3. รับ state และ hook navigate
  const { cart, setCart } = useOutletContext<CartContextType>();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    alert("ชำระเงินสำเร็จ!");
    setCart([]); // ล้างตะกร้า
    navigate("/"); // 4. ส่งกลับไปหน้าแรก
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-2xl mt-6">
      <h1 className="text-2xl font-bold mb-4">ชำระเงิน</h1>

      {cart.map((item) => (
        <div key={item.id} className="border-b py-2 flex items-center gap-4">
          <img
            src={item.img}
            alt={item.name}
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">
              {item.qty} × ฿{item.price.toLocaleString()}
            </p>
          </div>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-4">
        ยอดรวมทั้งหมด: ฿{total.toLocaleString()}
      </h2>

      <button
        onClick={handleCheckout} // 5. เรียกใช้ function
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        ยืนยันการชำระเงิน
      </button>
    </div>
  );
}