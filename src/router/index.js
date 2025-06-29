import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import UserDashboard from "../views/UserDashboard";
import Books from "../views/Books"
import AddBooks from "../views/AddBooks"
import Orders from "../views/Orders"
import OrderHistory from "../views/OrderHistory"
import Customers from "../views/Customers"
import ViewBooks from '@/views/ViewBooks'
import EditBook from '@/views/EditBook'
import BookDetails from '@/views/BookDetails'
import Wishlist from '@/views/Wishlist'
import PurchaseHistory from '@/views/PurchaseHistory'
import Profile from '@/views/Profile'
import { jwtDecode } from "jwt-decode";

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
    path: "/purchase-history",
    name: "PurchaseHistory",
    component: PurchaseHistory,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
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
    path: "/book-details/:id",
    name: "BookDetails",
    component: BookDetails,
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
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
    meta: { requiresAuth: true },
  },
  {
    path: "/add-books",
    name: "AddBooks",
    component: AddBooks,
    meta: { requiresAuth: true },
  },
  {
    path: "/order-history",
    name: "OrderHistory",
    component: OrderHistory,
    meta: { requiresAuth: true },
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
    meta: { requiresAuth: true },
  },
  {
    path: "/all-customers",
    name: "Customers",
    component: Customers,
    meta: { requiresAuth: true },
  },
  {
    path: "/all-books",
    name: "ViewBooks",
    component: ViewBooks,
    meta: { requiresAuth: true },
  },
  {
    path: "/edit-book/:bookId",
    name: "EditBook",
    component: EditBook,
    meta: { requiresAuth: true },
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      console.log('Navigating to:', to.path);
      next({ path: '/login', query: { redirect: to.fullPath } })
    } else {
      const decodedToken = jwtDecode(token);
      const currentTimestamp = Math.floor(Date.now() / 1000);

      if (decodedToken.exp * 1000 < currentTimestamp) {
        localStorage.removeItem('access_token');
        next({ path: '/login', query: { redirect: to.fullPath } });
      } else {
        next();
      }
    }
  } else {
    next()
  }
})


export default router;
