import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./routes.ts"

export const routerConfig = createRouter({
    history: createWebHistory(),
    routes
})