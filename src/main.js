import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import { routes } from "./routers/index.js";
import store from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes // short for `routes: routes`
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
