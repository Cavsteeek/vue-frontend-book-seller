import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import DashBoard from "../views/DashBoard.vue";
import UserDashboard from "../views/UserDashboard";
import Books from "../views/Books"
import AddBooks from "../views/AddBooks"
import Orders from "../views/Orders"
import OrderHistory from "../views/OrderHistory"
import Customers from "../views/Customers"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/user-dashboard",
    name: "UserDashboard",
    component: UserDashboard,
  },
  {
    path: "/books",
    name: "Books",
    component: Books,
  },
  {
    path: "/add-books",
    name: "AddBooks",
    component: AddBooks,
  },
  {
    path: "/order-history",
    name: "OrderHistory",
    component: OrderHistory,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/all-customers",
    name: "Customers",
    component: Customers,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
