import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue"
import Tour from "../views/Tour.vue"

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/tour",
        component: Tour
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;