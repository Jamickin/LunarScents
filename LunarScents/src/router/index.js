import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import StoreView from "../views/StoreView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import ConfirmationView from "../views/ConfirmationView.vue";
import BuildBoxView from "../views/BuildBoxView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/store",
      name: "store",
      component: StoreView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/confirmation",
      name: "confirmation",
      component: ConfirmationView,
    },
    {
      path: "/buildbox",
      name: "buildbox",
      component: BuildBoxView,
    },
  ],
});

export default router;
