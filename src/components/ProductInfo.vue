<template>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" :alt="product.name" width="300" />
    <p>{{ product.description }}</p>
    <p><b>{{ product.price }} грн</b></p>
  </div>

  <p v-else>Продукт не знайдено</p>
</template>

<script>

import { products } from "@/db";
import { useRoute } from "vue-router";

console.log("[INFO] - products db", products)

export default {
  name: "ProductInfo",
  setup() {
    const route = useRoute();

    const productId = Number(route.params.idProduct);

    const product = products.find(p => p.id === productId);

    return { product: product };
  }
};
</script>
