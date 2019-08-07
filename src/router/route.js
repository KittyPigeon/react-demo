import Home from "../pages/Home/Home"
import Product from "../pages/Product/Product"
import About from "../pages/About/About"
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'
import City from '../pages/City/City'

/* import Col from "../pages/Col"
import Cart from "../pages/Cart"
import Buy from "../pages/Buy" */
 
 
const routes = [
  {
    path: "/",
    component: Home,
    exact : true,
    auth:true
  },
    {
      path: "/home",
      component: Home,
      auth:true
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
        component: Login,
      },
      {
        path: "/city/:id",
        component: City,
      },
 
  ];
 
 
  export default routes
