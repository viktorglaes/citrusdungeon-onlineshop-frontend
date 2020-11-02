import axios from "axios";

const resource_uri = `http://localhost:5000/api/products`;

const state = {
  products: [],
  // filteredProducts: [],
};
const getters = {
  allProducts: (state) => state.products,
  // filteredProducts: (state) => state.filteredProducts,
};

const actions = {
  async getProducts({ commit }, params) {
    let res = await axios.get(
      resource_uri + `?title=${params.title}&type=${params.categories}`
    );
    commit("setProducts", res.data);
    return res;
  },
  // async getProductByTitle({ commit }, title) {
  //   let res = await axios.get(resource_uri + title);
  //   commit("setFilteredProducts", res.data);
  //   return res;
  // },
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  // setFilteredProducts(state, filteredProducts) {
  //   state.filteredProducts = filteredProducts;
  // },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
