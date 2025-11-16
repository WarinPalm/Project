// src/pages/Register.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import hook

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate(); // 2. เรียกใช้ hook

  const handleChange = (e: { target: { name: any; value: any } }) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((u: { email: string }) => u.email === form.email)) {
      alert("อีเมลนี้ถูกใช้ไปแล้ว!");
      return;
    }
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("สมัครสมาชิกสำเร็จ ✅");
    
    // 3. เปลี่ยนจาก window.location.href เป็น navigate
    // window.location.href = "/";
    navigate("/"); // <-- ดีกว่า!
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-xl flex flex-col gap-4 w-80"
      >
        <h2 className="text-xl font-bold text-blue-700">สมัครบัญชี</h2>
        <input
          type="text"
          name="name"
          placeholder="ชื่อ"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="อีเมล"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="รหัสผ่าน"
          className="border p-2 rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-700 text-white py-2 rounded hover:bg-blue-800"
        >
          สมัคร
        </button>
      </form>
    </div>
  );
}