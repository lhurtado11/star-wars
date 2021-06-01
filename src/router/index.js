import Vue from 'vue'
import VueRouter from 'vue-router'
import Album from "@/components/Album.vue";
import Lamina from "@/components/Lamina.vue";

Vue.use(VueRouter);

const routes = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Album",
      component: Album,
    },
    {
      path: "/Lamina",
      name: "Lamina",
      component: Lamina,
    },
  ]
});

export default routes;