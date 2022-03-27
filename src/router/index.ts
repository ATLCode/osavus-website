import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import Business from "../views/Business.vue";
import Software from "../views/Software.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/business",
    name: "Business",
    component: Business,
  },
  {
    path: "/software",
    name: "Software",
    component: Software,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
