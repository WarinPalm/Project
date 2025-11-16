interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
}

interface CheckoutProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function CheckoutPage({ cart, setCart }: CheckoutProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ชำระเงิน</h1>

      {cart.map((item) => (
        <div key={item.id} className="border-b py-2">
          <img src={item.img} className="w-16 h-16 object-cover" />
          <p>{item.name}</p>
          <p>{item.qty} × ฿{item.price.toLocaleString()}</p>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-4">
        ยอดรวมทั้งหมด: ฿{total.toLocaleString()}
      </h2>

      <button
        onClick={() => {
          alert("ชำระเงินสำเร็จ!");
          setCart([]); // ล้างตะกร้า
        }}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        ยืนยันการชำระเงิน
      </button>
    </div>
  );
}
