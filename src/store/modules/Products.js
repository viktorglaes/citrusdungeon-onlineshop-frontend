import axios from "axios";

const resource_uri = "http://localhost:5000/api/products";

const state = {
  products: [],
};
const getters = {
  allProducts: (state) => state.products,
};

const actions = {
  async getProducts({ commit }) {
    let res = await axios.get(resource_uri);
    commit("setProducts", res.data);
    return res;
  },
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
