import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import CartPage from "../pages/rooms/CartPage";
import Checkout from "../pages/rooms/Checkout";
import SingleRoom from "../pages/rooms/SingleRoom";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/rooms/OrderPage";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddRoom from "../pages/dashboard/addRoom/AddRoom";
import UpdateRoom from "../pages/dashboard/EditRoom/UpdateRoom";
import ManageRoom from "../pages/dashboard/manageRooms/ManageRoom";
import AdminLogin from "../components/AdminLogin";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/orders",
            element: <PrivateRoute><OrderPage/></PrivateRoute>,
        },
        {
            path: "/rooms/:id",
            element: <SingleRoom/>,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register/>,
        },
        {
          path: "/cart",
          element: <CartPage />
      },
        {
          path: "/checkout",
          element: <PrivateRoute><Checkout /></PrivateRoute>
      },
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path:"/dashboard",
      element:<AdminRoute><DashboardLayout/></AdminRoute>,
      children:[
        {
          path:"",
          element:<AdminRoute><Dashboard/></AdminRoute>
        },
        {
          path:"add-new-room",
          element:<AdminRoute><AddRoom/></AdminRoute>
        },
        {
          path:"edit-room/:id",
          element:<AdminRoute><UpdateRoom/></AdminRoute>
        },
        {
          path:"manage-rooms",
          element:<AdminRoute><ManageRoom/></AdminRoute>
        },
      ]
    }
  ]);
export default router;