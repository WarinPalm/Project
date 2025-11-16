// src/router.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 1. Import Layout และ หน้าต่างๆ
import App from "./App.tsx";
import Home from "./Home.tsx";
import Cart from "./Cart.tsx";
import Register from "./Register.tsx";
import CheckoutPage from "./CheckoutPage.tsx";

// 2. สร้าง router
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        index: true, // index: true หมายถึง path: "/"
        element: <Home />,
    },
    {
        path: "cart",
        element: <Cart />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "checkout",
        element: <CheckoutPage />,
    },
]);\

export default function Router(){
    return(
        <RouterProvider router={router}/>
    )
}