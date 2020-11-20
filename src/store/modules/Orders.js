import axios from "axios";
// import router from "../../router/index";

const resource_uri = `/api/orders`;

const state = {
  status: "",
  error: null,
  orders: [],
};

const getters = {
  orderItems: (state) => state.orders,
};

const actions = {
  //submit order
  async orderProducts({ commit }, orderData) {
    try {
      commit("order_request");
      let res = await axios.post("/api/orders/submit", orderData);
      if (res.data.success !== undefined) {
        commit("order_success");
      }
      return res;
    } catch (err) {
      commit("order_error", err);
    }
  },
  async getOrders({ commit }, params) {
    // console.log(params, "asdasdasd");
    let res = await axios.get(resource_uri + `?_id=${params}`);
    commit("setOrders", res.data);
    return res;
  },
};

const mutations = {
  order_request(state) {
    state.status = "loading";
    state.error = null;
  },
  order_success(state) {
    state.status = "success";
    state.error = null;
  },
  order_error(state, err) {
    state.error = err.response.data.msg;
  },
  setOrders(state, orders) {
    state.orders = orders;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
