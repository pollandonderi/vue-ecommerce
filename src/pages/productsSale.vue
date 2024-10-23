<template>
  <div class="section">
    <v-card
      :disabled="loading"
      :loading="loading"
      class="mx-auto my-12"
      max-width="200"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="100"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        cover
      ></v-img>

      <v-card-item>
        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            size="small"
            half-increments
            readonly
          ></v-rating>
          <div class="text-grey ms-1 text-small">4.5 (413)</div>
        </v-row>
        <div class="my-4 text-subtitle-1"></div>
        <div>
          Small plates, salads & sandwiches - an intimate setting.
        </div>
      </v-card-text>
      <v-divider class="mx-4 mb-1"></v-divider>
      <div class="px-4 mb-2">
      </div>
      <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="Reserve"
          block
          border
          @click="reserve"
        ></v-btn>
      </v-card-actions>
    </v-card>



    <v-card
      :disabled="loading"
      :loading="loading"
      class="mx-auto my-12"
      max-width="200"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="100"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        cover
      ></v-img>

      <v-card-item>
        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            size="small"
            half-increments
            readonly
          ></v-rating>
          <div class="text-grey ms-1 text-small">4.5 (413)</div>
        </v-row>
        <div class="my-4 text-subtitle-1"></div>
        <div>
          Small plates, salads & sandwiches - an intimate setting.
        </div>
      </v-card-text>
      <v-divider class="mx-4 mb-1"></v-divider>
      <div class="px-4 mb-2">
      </div>
      <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="Reserve"
          block
          border
          @click="reserve"
        ></v-btn>
      </v-card-actions>
    </v-card>


    <v-card
      :disabled="loading"
      :loading="loading"
      class="mx-auto my-12"
      max-width="200"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="100"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        cover
      ></v-img>

      <v-card-item>
        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            size="small"
            half-increments
            readonly
          ></v-rating>
          <div class="text-grey ms-1 text-small">4.5 (413)</div>
        </v-row>
        <div class="my-4 text-subtitle-1"></div>
        <div>
          Small plates, salads & sandwiches - an intimate setting.
        </div>
      </v-card-text>
      <v-divider class="mx-4 mb-1"></v-divider>
      <div class="px-4 mb-2">
      </div>
      <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="Reserve"
          block
          border
          @click="reserve"
        ></v-btn>
      </v-card-actions>
    </v-card>



    
    <v-card
      :disabled="loading"
      :loading="loading"
      class="mx-auto my-12"
      max-width="200"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="100"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        cover
      ></v-img>

      <v-card-item>
        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            size="small"
            half-increments
            readonly
          ></v-rating>
          <div class="text-grey ms-1 text-small">4.5 (413)</div>
        </v-row>
        <div class="my-4 text-subtitle-1"></div>
        <div>
          Small plates, salads & sandwiches - an intimate setting.
        </div>
      </v-card-text>
      <v-divider class="mx-4 mb-1"></v-divider>
      <div class="px-4 mb-2">
      </div>
      <v-card-actions>
        <v-btn
          color="deep-purple-lighten-2"
          text="Reserve"
          block
          border
          @click="reserve"
        ></v-btn>
      </v-card-actions>
    </v-card>
  
  </div>
</template>
<script setup>
let loading = false;
const selection = 1;
function reserve() {
  this.loading = true;

  setTimeout(() => (this.loading = false), 2000);
}
</script>
<style>

@media (min-width:600px) {
    .section{
    display: grid;
    grid-template-columns: repeat(4,1fr);
}
}
</style>
