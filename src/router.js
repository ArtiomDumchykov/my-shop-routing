import { createRouter,  createWebHistory } from "vue-router";

import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
// import HomePage from "./pages/HomePage.vue";
import AdminDashboard from "./pages/AdminDashboard.vue";
import ManageReviews from "./pages/ManageReviews.vue";
import ManageProducts from "./pages/ManageProducts.vue";
import ProductInfo from "./components/ProductInfo.vue";


const routes = [
    {
        path: "/",
        component: AdminDashboard,
        children: [
            {
                path: "",
                component: ManageProducts
            },
            {
                path: "reviews",
                component: ManageReviews
            },
            {
                path: "products/:idProduct",
                component: ProductInfo
            },
        ]
    },
    {
        path: "/about",
        component: AboutPage
    },
    {
        path: "/contact",
        component: ContactPage
    },
     {
        path: "/admin",
        component: AdminDashboard,
        children: [
            {
                path: "products",
                component: ManageProducts
            },
            {
                path: "products/:idProduct",
                component: ProductInfo
            },
            {
                path: "reviews",
                component: ManageReviews
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory('/my-shop-routing/'),
    routes
})

export default router