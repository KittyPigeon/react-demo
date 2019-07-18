import Home from "../pages/Home/Home"
import Product from "../pages/Product/Product"
import About from "../pages/About/About"
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'
/* import Col from "../pages/Col"
import Cart from "../pages/Cart"
import Buy from "../pages/Buy" */
 
 
const routes = [
  {
    path: "/",
    component: Home,
    exact : true
  },
    {
      path: "/home",
      component: Home,
      // exact : true
    },
    {
        path: "/product",
        component: Product,
        // exact : true
      },
      {
        path: "/about",
        component: About,
        // exact : true
      },
      {
        path: "/order",
        component: Order,
        // exact : true
      },
      {
        path: "/login",
        component: Login,
        // exact : true
      },
    // {
    //     path: "/col",
    //     component: Col
    //   },
    //   {
    //     path: "/cart",
    //     component: Cart
    //   },
    //   {
    //     path: "/buy",
    //     component: Buy
    //   }, 
    // {
    //   path: "/login",
    //   component: Login,
    //   routes: [
    //     {
    //       path: "/tacos/bus",
    //       component: Bus
    //     },
    //     {
    //       path: "/tacos/cart",
    //       component: Cart
    //     }
    //   ]
    
 
  ];
 
 
  export default routes
