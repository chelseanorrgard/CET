import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'/',
        element:<h1>Home</h1>
      },
      {
        path:'/nav',
        element:<h1>Navbars</h1>
      },
      {
        path:'/about',
        element:<h1>About</h1>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ]
  },
]);

export default router;