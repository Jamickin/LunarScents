import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import StoreView from "../views/StoreView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import ConfirmationView from "../views/ConfirmationView.vue";
import FAQView from "../views/FAQView.vue";
import GalleryView from "../views/GalleryView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/selected-product/:selectedProduct',
      name: 'selectedProduct',
      component: () => import(/* webpackChunkName: "CheckoutView" */ '../views/CheckoutView.vue'),
      props: true, // Allow route parameters to be passed as props
        },
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
      path: "/gallery",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
