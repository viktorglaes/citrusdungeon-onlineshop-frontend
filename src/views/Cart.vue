<template>
  <div class="cart">
    <div class="container">
      <div class="container-inner">
        <div class="title">Shopping Cart</div>
        <!-- <div class="flex-container">
        <div class="table-headers">Product</div>
        <div class="table-headers">Quantity</div>
        <div class="table-headers">Price</div>
      </div> -->
        <div v-if="cartItems.length > 0">
          <b-table :data="cartItems" :columns="columns"> </b-table>
        </div>
        <div v-else>
          <p style="background-color: white; padding: 20px;">
            Your cart is empty. Please visit our
            <router-link to="/products">Products</router-link> page for the
            latest and greatest.
          </p>
        </div>
        <div class="level">
          <div class="level-left">
            <div
              class="button"
              style="margin-top: 20px; background-color: #ffdd57;"
              @click="deleteAllCartItems"
            >
              <b-icon icon="trash-alt"></b-icon>
              <span>Empty Cart</span>
            </div>
          </div>
          <div class="level-right">
            <p style="margin-top: 20px; font-size: 24px; font-weight: 600">
              Total: ${{ totalCartPrice }}
            </p>
          </div>
        </div>
      </div>
      <div class="level">
        <div class="level-left checkout">
          <router-link to="/products">
            <div class="button">
              <b-icon icon="chevron-circle-left"></b-icon>
              <span>Go to products</span>
            </div>
          </router-link>
          <!-- <b-button type="is-primary">Back to products</b-button> -->
        </div>
        <div class="level-right checkout">
          <div v-if="cartItems.length > 0">
            <router-link to="/checkout">
              <b-button type="is-primary">Checkout</b-button>
            </router-link>
          </div>
          <div v-else>
            <b-button type="is-primary" disabled>Checkout</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cartItems"]),
  },
  data() {
    return {
      totalCartPrice: null,
      columns: [
        {
          field: "title",
          label: "Product",
        },
        {
          field: "quantity",
          label: "Quantity",
        },
        {
          field: "price",
          label: "Price/Item",
        },
        {
          field: "totalPrice",
          label: "Total Price",
        },
      ],
    };
  },
  mounted() {
    let sumTotal = 0;
    this.cartItems.forEach((item) => {
      sumTotal += item.totalPrice;
    });
    this.totalCartPrice = Math.round((sumTotal + Number.EPSILON) * 100) / 100;
  },
  methods: {
    ...mapActions(["setCartItems"]),
    deleteAllCartItems() {
      this.totalPrice = 0;
      this.setCartItems([]);
      let quantityIcon = document.getElementById("item-quantity");
      quantityIcon.style =
        "transition: transform 0.6s ease; transform: scale(1.1); background-color: transparent";
    },
  },
};
</script>

<style lang="scss">
.cart {
  margin-top: 20px;
  padding: 20px;
  .container {
    .container-inner {
      background-color: whitesmoke;
      padding: 20px;
      .title {
        font-size: 32px;
      }
    }
  }
  .checkout {
    padding: 20px;
  }
}
</style>
