// src/Cart.tsx
import { useOutletContext, Link } from "react-router-dom";
import type { CartContextType } from "./components/layout";

export default function CartPanel() {
  const { cart, setCart } = useOutletContext<CartContextType>();

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (

    <div className="bg-white shadow-lg rounded-2xl p-6 mt-6 max-w-2xl mx-auto">
      <h2 className="font-bold text-2xl mb-4 text-blue-700 flex items-center">
        🛒 ตะกร้าสินค้า
      </h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-500 py-10">
          <img
            src="/empty-cart.svg"
            alt="Empty Cart"
            className="w-40 opacity-70 mb-4"
          />
          <p>ยังไม่มีสินค้าในตะกร้า</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-xl p-3 hover:bg-gray-50 transition"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.img || "/placeholder.png"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    {item.qty} ชิ้น × ฿{item.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="font-bold text-gray-800">
                  ฿{(item.price * item.qty).toLocaleString()}
                </span>
                <button
                  className="text-red-500 hover:text-red-600 font-medium"
                  onClick={() => removeItem(item.id)}
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}

          {/* total */}
          <div className="border-t pt-4 flex justify-between font-semibold text-lg text-gray-800">
            <span>รวมทั้งหมด</span>
            <span>฿{total.toLocaleString()}</span>
          </div>

          {/* 2. เปลี่ยนจาก <button> เป็น <Link> เพื่อให้ Router ทำงาน */}
          <Link
            to="/checkout"
            className="block w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-medium transition text-center"
          >
            ไปชำระเงิน 💳
          </Link>
        </div>
      )}
    </div>
  );
}