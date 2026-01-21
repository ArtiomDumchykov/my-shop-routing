<template>
    <h1 class="title">Hello world</h1>
    <div>
        <nav>
            <ul>
                <li><router-link to="/" active-class="active-link">Home</router-link></li>
                <li><router-link to="/about" active-class="active-link">About</router-link></li>
                <li><router-link to="/contact" active-class="active-link">Contact</router-link></li>
                <li><router-link to="/products" active-class="active-link">Contact</router-link></li>
                <li><router-link to="/admin/products" active-class="active-link">Головна</router-link></li>
                <li><router-link to="/admin/reviews" active-class="active-link">Відгуки</router-link></li>
            </ul>
        </nav>
    </div>

    <main>
        <router-view></router-view>
    </main>
</template>

<script>
    export default {
        name: "AdminDashboard"
    }
</script>

<style>
    /* Активна сторінка */
.active-link {
  background-color:  white;
  color: orange;
  font-weight: bold;
}

.title {
    background-color: blueviolet;
}
</style>