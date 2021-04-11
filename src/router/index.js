import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/brand",
		name: "Brand",
		component: () => import(/* webpackChunkName: "brand" */ "../views/Brand.vue"),
	},
	{
		path: "/components",
		name: "Components",
		component: () => import(/* webpackChunkName: "components" */ "../views/Components.vue"),
	},
	{
		path: "/links",
		name: "Links",
		component: () => import(/* webpackChunkName: "links" */ "../views/Links.vue"),
	},
	{
		path: "/tools",
		name: "Tools",
		component: () => import(/* webpackChunkName: "tools" */ "../views/Tools.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
