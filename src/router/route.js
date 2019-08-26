import Home from "../pages/Home/Home"
import Product from "../pages/Product/Product"
import About from "../pages/About/About"
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'
import ELogin from '../pages/EleLogin/EleLogin'
import City from '../pages/City/City'
import Mine from '../pages/Mine/Mine'
import Info from '../pages/Mine/Info/Info'
/* import Col from "../pages/Col"
import Cart from "../pages/Cart"
import Buy from "../pages/Buy" */
 
 
const routes = [
  {
    path: "/",
    component: Home,
    exact : true,
    auth:false
  },
    {
      path: "/home",
      component: Home,
    },
    {
        path: "/product",
        component: Product,
        auth:true
      },
      {
        path: "/about",
        component: About,
        auth:true
      },
      {
        path: "/order",
        component: Order,
      },
      {
        path: "/login",
        component: ELogin,
      },
      {
        path: "/city/:id",
        component: City,
      },
      {
        path:"/mine",
        component:Mine,
        auth:false
      },
      {
        path:"/mine/info",
        component:Info,
        auth:true
      },
  ];
 
 
  export default routes
