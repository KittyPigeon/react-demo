import Home from "../pages/Home/Home"
import Msite from "../pages/msite/msite"
import Product from "../pages/Product/Product"
import About from "../pages/About/About"
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'
import ELogin from '../pages/EleLogin/EleLogin'
import City from '../pages/City/City'
import Mine from '../pages/Mine/Mine'
import Info from '../pages/Mine/Info/Info'
import ElePwd from '../pages/ElePwd/ElePwd'
import UserName from '../pages/Mine/UserName/UserName'
import Balance from '../pages/Mine/balance/balance'
import BalanceDetail from '../pages/Mine/balance/balanceDetail/balanceDetail' 
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
        path:"/login/reset-pwd",
        component:ElePwd
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
        component:Info
      },
      {
        path:"/mine/balance",
        component:Balance
      },
      {
        path:"/mine/info/username",
        component:UserName
      },
      {
        path:"/mine/balance/balanceDetail",
        component:BalanceDetail
      },
      {
        path:"/msite",
        component:Msite
      },
  ];
 
 
  export default routes
