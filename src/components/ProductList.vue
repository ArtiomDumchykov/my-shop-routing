<template>
    <div class="product-list">
        <div v-if="products.length === 0">empty</div>
        <ProductCard 
            v-else 
            v-for="product in products" 
            :key="product.id" 
            :id="product.id"
            :name="product.name"
            :description="product.description" 
            :price="product.price" 
            :image="product.image" 
        />
        <!-- <div>
        <ProductCard
          :key="products[0].id"
          :name="products[0].name"
          :description="products[0].description"
          :price="products[0].price"
          :image="products[0].image"
        />
      </div> -->
    </div>
</template>

<script>
import { products } from '@/db';
import ProductCard from './ProductCard.vue';

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            products
        };
    },
};
</script>

<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
</style>