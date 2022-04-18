import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "TodoView",
    component: () => import("@/views/TodoView.vue"),
  },
  {
    path: "/record-view",
    name: "RecordView",
    component: () => import("@/views/RecordView.vue"),
  },
  {
    path: "/record/:id",
    name: "Record",
    component: () => import("@/views/RecordItem.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
