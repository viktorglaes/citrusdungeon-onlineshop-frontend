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
          <b-table :data="cartItems" :columns="columns"></b-table>
        </div>
        <div v-else>
          <p style="background-color: white; padding: 20px;">
            Your cart is empty. Please visit our
            <router-link to="/products">Products</router-link> page for the
            latest and greatest.
          </p>
        </div>

        <div class="level-right">
          <p style="margin-top: 20px; font-size: 24px; font-weight: 600">
            Total: ${{ totalPrice }}
          </p>
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
          <b-button type="is-primary">Checkout</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cartItems"]),
    // totalSum: () => {
    //   return this.sumP;
    // },
  },
  data() {
    return {
      totalPrice: null,
      // data: [
      //   {
      //     id: 1,
      //     title: "Mac",
      //     quantity: 1,
      //     price: 55,
      //   },
      //   {
      //     id: 2,
      //     title: "Mac",
      //     quantity: 1,
      //     price: 45,
      //   },
      //   {
      //     id: 3,
      //     title: "Mac",
      //     quantity: 1,
      //     price: 33,
      //   },
      //   {
      //     id: 4,
      //     title: "Mac",
      //     quantity: 1,
      //     price: 120,
      //   },
      //   {
      //     id: 5,
      //     title: "Mac",
      //     quantity: 1,
      //     price: 55,
      //   },
      // ],
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
          label: "Price",
        },
      ],
    };
  },
  mounted() {
    let sumTotal = 0;
    this.cartItems.forEach((item) => {
      sumTotal += item.price;
    });
    this.totalPrice = sumTotal;
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
