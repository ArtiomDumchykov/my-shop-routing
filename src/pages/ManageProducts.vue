<template>
    <h2 class="title">ManageProducts</h2>
    <ProductList />
</template>

<script>
import ProductList from '@/components/ProductList.vue';

    export default {
        name: "ManageProducts",
        components: {
            ProductList
        }
    }
</script>

<style scoped>
.title {
    background-color: aqua;
}
</style>