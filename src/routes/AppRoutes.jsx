import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import HowtoWork from "../pages/HowtoWork"
import ExpressYourself from "../pages/ExpressYourself"
import Cart from "../pages/Cart"
import CheckOut from "../pages/CheckOut"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Layout from "../layouts/Layout"
import LayoutAdmin from "../layouts/LayoutAdmin"
import Dashboard from "../pages/admin/Dashboard"
import Category from "../pages/admin/Category"
import Product from "../pages/admin/Product"
import Manage from "../pages/admin/Manage"
import HomeUser from "../pages/user/HomeUser"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {path: "shop", element: <Shop />},
      {path: "how-to-work", element: <HowtoWork />},
      {path: "express-yourself", element: <ExpressYourself />},
      {path: "cart", element: <Cart />},
      {path: "checkout", element: <CheckOut />},
      {path: "login", element: <Login />},
      {path: "register", element: <Register />}
    ]
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {index: true, element: <Dashboard />},
      {path: "category", element: <Category />},
      {path: "product", element: <Product />},
      {path: "manage", element: <Manage />},

    ]
  },
  {
    path: "/user",
    element: <LayoutAdmin />,
    children: [
      {index: true, element: <HomeUser />},
    ]
  }
])

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default AppRoutes