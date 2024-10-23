<template>
  <v-app id="inspire">
    <v-navigation-drawer floating permanent v-model="drawer">
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          to="/products"
          value="home"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          prepend-icon="mdi-forum"
          title="products"
          to="/products"
          value="products"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="Saved products"
          to="/saved"
          value="saved"
        ></v-list-item>
        <v-btn
          class="me-2 text-none"
          block
          color="#4f545c"
          prepend-icon="mdi-logout"
          variant="flat"
        >
          Logout
        </v-btn>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Shop </v-app-bar-title>
      <v-btn
          class="me-2 text-none"
          color="#FFD600"
          prepend-icon="mdi-cart-outline"
          variant="flat"
        >
        Cart
        </v-btn>
      
      <v-btn
          class="me-2 text-none"
          color="#FFD600"
          prepend-icon="mdi-help-circle-outline"
          variant="flat"
        >
          Help
        </v-btn>
      
    </v-app-bar>

    <v-main>

      <!-- Do not forget to add this, first create a page / view add it to the routes, products, cart, then add it to this nav -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>
