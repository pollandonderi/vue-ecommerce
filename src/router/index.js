/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import HomeBoard from "@/components/homeBoard.vue";
import LoginNow from "@/components/loginNow.vue";
import RegisterNow from "@/components/registerNow.vue";
import ProductsSale from "@/pages/productsSale.vue";
import SavedProducts from "@/pages/savedProducts.vue";
import { createRouter, createWebHistory } from "vue-router/auto";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginNow,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterNow,
    },
    {
      path: "/home",
      name: "home",
      component: HomeBoard,
      children: [
        {
          path: "/products",
          name: "products",
          component: ProductsSale,
        },
        {
          path: "/saved",
          name: "savedProducts",
          component: SavedProducts,
        },
      ],
    },
    // {
    //   path: "/products",
    //   name: "products",
    //   component: ProductsSale,
    // },
    // {
    //   path: "/saved",
    //   name: "savedProducts",
    //   component: SavedProducts,
    // },
  ],
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
