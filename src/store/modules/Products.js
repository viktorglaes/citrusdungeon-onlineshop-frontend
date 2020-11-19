import axios from "axios";

const resource_uri = `http://localhost:5000/api/products`;

const state = {
  products: [],
  // filteredProducts: [],
  cart: [],
  product: {},
};
const getters = {
  allProducts: (state) => state.products,
  // filteredProducts: (state) => state.filteredProducts,
  cartItems: (state) => state.cart,
  product: (state) => state.product,
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
  setCartItems({ commit }, data) {
    commit("changeCartItems", data);
  },
  setProductById({ commit }, data) {
    commit("viewProduct", data);
  },
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  // setFilteredProducts(state, filteredProducts) {
  //   state.filteredProducts = filteredProducts;
  // },
  changeCartItems(state, cart) {
    state.cart = cart;
  },
  viewProduct(state, product) {
    state.product = product;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
