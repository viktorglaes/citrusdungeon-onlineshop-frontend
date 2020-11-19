import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/Auth";
import Products from "./modules/Products";
import Orders from "./modules/Orders";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Products,
    Orders,
  },
});
