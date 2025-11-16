// src/router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 1. Import Layout และ Pages
import Layout from "./components/layout";
import Home from "./Home";
import CartPanel from "./Cart";
import CheckoutPage from "./CheckoutPage";
import Register from "./Register";

// 2. สร้าง routes แบบ object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ให้ Layout เป็นตัวหลัก
    children: [
      {
        index: true, // index: true หมายถึง path "/"
        element: <Home />,
      },
      {
        path: "cart",
        element: <CartPanel />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
    ],
  },
  {
    // หน้ารับสมัครจะอยู่นอก Layout หลัก (ไม่มี Header)
    path: "/register",
    element: <Register />,
  },
]);

// 3. สร้าง Component Router เพื่อส่งออก
export default function Router() {
  return <RouterProvider router={router} />;
}