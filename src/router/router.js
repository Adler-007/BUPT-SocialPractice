import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/sign",
    name: "Sign",
    component: () => import("@/views/Sign.vue"),
  },
  {
    path: "/aboutUs",
    name: "AboutUs",
    component: () => import("@/views/AboutUs.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
  },
  {
    path: "/enroll",
    name: "Enroll",
    component: () => import("@/views/Enroll.vue"),
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("@/views/Experience.vue"),
  },
  {
    path: "/q&a",
    name: "Q&A",
    component: () => import("@/views/Q&A.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/volunteerWork",
    name: "VolunteerWork",
    component: () => import("@/views/VolunteerWork.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
